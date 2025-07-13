'use client';

import { useEffect, useRef, useState } from "react";

type Enemy = {
  x: number;
  y: number;
  alive: boolean;
  degree: number;
  speed: number;
};

export default function PlaneGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);

  const plane = useRef({ x: 200, y: 400 });
  const vx = useRef(0); // 飞机x方向速度
  const vy = useRef(0); // 飞机y方向速度

  const bullets = useRef<{ x: number; y: number }[]>([]);
  const enemies = useRef<Enemy[]>([]);
  const explosions = useRef<{ x: number; y: number; frame: number }[]>([]);
  const explosionImages = useRef<HTMLImageElement[]>([]);
  const shootSound = useRef<HTMLAudioElement | null>(null);
  const explodeSound = useRef<HTMLAudioElement | null>(null);

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const enemySpawnTimer = useRef(0);

  const keyState = useRef({
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bg = new Image();
    bg.src = "/images/planegame/bg.jpg";

    const planeImg = new Image();
    planeImg.src = "/images/planegame/plane.png";

    const enemyImg = new Image();
    enemyImg.src = "/images/planegame/enemy.png";

    explosionImages.current = [];
    for (let i = 1; i <= 16; i++) {
      const img = new Image();
      img.src = `/images/planegame/explode/e${i}.gif`;
      explosionImages.current.push(img);
    }

    shootSound.current = new Audio("/yilidan-bg.mp4");
    explodeSound.current = new Audio("/yilidan2-bg.mp4");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key in keyState.current) {
        keyState.current[e.key as keyof typeof keyState.current] = true;
      }
      if (e.key === " ") {
        bullets.current.push({
          x: plane.current.x + 9,
          y: plane.current.y,
        });
        shootSound.current?.play();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key in keyState.current) {
        keyState.current[e.key as keyof typeof keyState.current] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const draw = () => {
      if (!ctx || gameOver) return;

      // 飞机控制：加速/减速
      const acceleration = 0.5;
      const maxSpeed = 6;
      const friction = 0.2;

      if (keyState.current.ArrowLeft) vx.current -= acceleration;
      if (keyState.current.ArrowRight) vx.current += acceleration;
      if (keyState.current.ArrowUp) vy.current -= acceleration;
      if (keyState.current.ArrowDown) vy.current += acceleration;

      // 摩擦力减速
      if (!keyState.current.ArrowLeft && !keyState.current.ArrowRight) {
        if (vx.current > 0) vx.current -= friction;
        else if (vx.current < 0) vx.current += friction;
      }

      if (!keyState.current.ArrowUp && !keyState.current.ArrowDown) {
        if (vy.current > 0) vy.current -= friction;
        else if (vy.current < 0) vy.current += friction;
      }

      // 限制最大速度
      vx.current = Math.max(Math.min(vx.current, maxSpeed), -maxSpeed);
      vy.current = Math.max(Math.min(vy.current, maxSpeed), -maxSpeed);

      // 避免抖动
      if (Math.abs(vx.current) < 0.1) vx.current = 0;
      if (Math.abs(vy.current) < 0.1) vy.current = 0;

      // 应用速度
      plane.current.x += vx.current;
      plane.current.y += vy.current;

      // 边界限制
      plane.current.x = Math.max(0, Math.min(canvas.width - 22, plane.current.x));
      plane.current.y = Math.max(0, Math.min(canvas.height - 33, plane.current.y));

      // 背景和飞机
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(planeImg, plane.current.x, plane.current.y, 22, 33);

      // 敌机生成
      enemySpawnTimer.current++;
      if (enemySpawnTimer.current % 60 === 0) {
        enemies.current.push({
          x: Math.random() * (canvas.width - 32),
          y: -32,
          alive: true,
          degree: Math.random() * Math.PI * 2,
          speed: 2 + Math.random() * 2,
        });
      }

      // 敌机移动与碰撞
      enemies.current.forEach((enemy) => {
        if (enemy.alive) {
          enemy.x += enemy.speed * Math.cos(enemy.degree);
          enemy.y += enemy.speed * Math.sin(enemy.degree);

          // 边界反弹
          // 修复后的敌人边界反弹并限制坐标在画布内
          if (enemy.x <= 0) {
            enemy.x = 0;
            enemy.degree = Math.PI - enemy.degree;
          }
          if (enemy.x >= canvas.width - 32) {
            enemy.x = canvas.width - 32;
            enemy.degree = Math.PI - enemy.degree;
          }
          if (enemy.y <= 0) {
            enemy.y = 0;
            enemy.degree = -enemy.degree;
          }
          if (enemy.y >= canvas.height - 32) {
            enemy.y = canvas.height - 32;
            enemy.degree = -enemy.degree;
          }


          ctx.drawImage(enemyImg, enemy.x, enemy.y, 32, 32);

          // 撞到飞机
          if (
            plane.current.x < enemy.x + 32 &&
            plane.current.x + 22 > enemy.x &&
            plane.current.y < enemy.y + 32 &&
            plane.current.y + 33 > enemy.y
          ) {
            setGameOver(true);
          }
        }
      });

      // 子弹绘制和移动
      bullets.current.forEach((bullet) => {
        ctx.fillStyle = "white";
        ctx.fillRect(bullet.x, bullet.y, 4, 10);
        bullet.y -= 5;
      });

      // 子弹命中敌机
      bullets.current.forEach((bullet) => {
        enemies.current.forEach((enemy) => {
          if (
            enemy.alive &&
            bullet.x < enemy.x + 32 &&
            bullet.x + 4 > enemy.x &&
            bullet.y < enemy.y + 32 &&
            bullet.y + 10 > enemy.y
          ) {
            enemy.alive = false;
            explosions.current.push({ x: enemy.x, y: enemy.y, frame: 0 });
            bullet.y = -20;
            explodeSound.current?.play();
            setScore((prev) => prev + 1);
          }
        });
      });

      bullets.current = bullets.current.filter((b) => b.y > 0);
      enemies.current = enemies.current.filter((e) => e.alive);

      // 爆炸动画
      explosions.current.forEach((explosion) => {
        const frameImg = explosionImages.current[explosion.frame];
        if (frameImg) {
          ctx.drawImage(frameImg, explosion.x, explosion.y, 32, 32);
        }
        explosion.frame++;
      });
      explosions.current = explosions.current.filter((e) => e.frame < 16);

      requestRef.current = requestAnimationFrame(draw);
    };

    bg.onload = () => {
      planeImg.onload = () => {
        draw();
      };
    };

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [gameOver]);

  const handleRestart = () => {
    plane.current = { x: 200, y: 400 };
    vx.current = 0;
    vy.current = 0;
    bullets.current = [];
    enemies.current = [];
    explosions.current = [];
    setScore(0);
    setGameOver(false);
    if (canvasRef.current?.getContext("2d")) {
      canvasRef.current.getContext("2d")?.clearRect(0, 0, 480, 640);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white relative">
      <h1 className="text-xl mb-2">Score: {score}</h1>
      {gameOver && (
        <div className="absolute top-1/3 text-center w-full">
          <h2 className="text-3xl font-bold mb-4">Game Over</h2>
          <button
            onClick={handleRestart}
            className="bg-red-600 text-white px-4 py-2 rounded shadow"
          >
            Restart
          </button>
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={480}
        height={640}
        className="border-2 border-white"
      />
    </div>
  );
}
