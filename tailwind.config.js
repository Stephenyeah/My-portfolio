// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,ts,jsx,tsx}', // 指向你的 src 文件夹中的所有页面和组件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
