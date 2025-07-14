'use client'

import { motion } from 'framer-motion'
import '@fontsource/cinzel'

export default function AboutPanel({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: show ? 100 : -800, opacity: show ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 65 }}
      className="z-50 absolute left-2/5 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[1180px] bg-gradient-to-br from-gray-900 to-black border-4 border-amber-700 rounded-xl shadow-[0_0_30px_rgba(255,191,0,0.4)] p-6 overflow-hidden"
    >
      <h1 className="text-center text-3xl font-[Cinzel] font-bold text-amber-400 mb-4 tracking-widest drop-shadow-[0_0_5px_gold]">
        ABOUT ME
      </h1>

      <div className="flex gap-6">
        {/* Star Wars-style rolling text */}
        <div className="relative w-2/3 h-[420px] perspective-[800px] overflow-hidden">
          <div className="absolute top-full w-full text-center text-yellow-300 text-l font-semibold animate-[crawl_50s_linear_infinite] [transform-style:preserve-3d] [transform-origin:60%_100%]">
            <div className="w-[95%] mx-auto">
              <p>
                Hello, I’m Stephen Yang, a passionate full-stack developer with a
                background in software engineering from Guangzhou University. Currently,
                I’m advancing my studies in Cloud Computing and Infrastructure Services
                at Haaga-Helia University of Applied Sciences in Finland.
              </p>

              <p>
                Over the years, I have gained hands-on experience not only in
                cutting-edge tech projects but also in practical work environments.
              </p>

              <p>
                I worked as a Network Administrator at the Guangzhou Taxation Bureau,
                where I managed the network maintenance for over 200 computers. From
                switches and routers to file servers and telephone systems, I handled
                it all—quickly troubleshooting issues and ensuring smooth operations,
                becoming the go-to tech problem solver for my colleagues. This role
                strengthened my skills in network operations and infrastructure
                management.
              </p>

              <p>
                Before that, I spent some time in Canada at the YMCA-YWCA of Winnipeg
                as a Child Care Assistant, where I developed patience, communication
                skills, and learned how to balance work with life effectively.
              </p>

              <p>
                Earlier in my career, I worked as a 3D Cartographer Assistant at
                Guangzhou Huadiyuan Design Institute, supporting the chief designer
                with CAD drawings and 3DMAX modeling. I’m familiar with indoor and
                outdoor rendering, VR visualization, and have experience creating
                preliminary plans and flat color diagrams.
              </p>

              <p>
                Technically, I’m comfortable with frontend frameworks like React and
                Next.js, backend technologies such as Java Spring Boot and Node.js,
                and cloud platforms including Azure and AWS. I have contributed to
                projects like the WeChat mini program “Friends in Finland” and the
                Azure-based AI legal assistant “LadyJustice AI.” I’m driven by
                innovation, focused on user experience, and enjoy collaborating with
                diverse teams.
              </p>

              <p>
                In my free time, I love football, billiards, video games, and most
                importantly, spending quality time with my child. These interests
                inspire my passion for game development and multilingual applications.
              </p>
            </div>
          </div>
        </div>

        {/* Video CV section */}
        <div className="w-1/2 aspect-video rounded-lg overflow-hidden border-2 border-yellow-600 shadow-md">
          <iframe
            src="https://www.youtube.com/embed/qiJ_7N956f4"
            title="About Me Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        @keyframes crawl {
          0% {
            top: 100%;
            transform: rotateX(25deg) translateZ(0);
          }
          100% {
            top: -250%;
            transform: rotateX(25deg) translateZ(-500px);
          }
        }
      `}</style>
    </motion.div>
  )
}
