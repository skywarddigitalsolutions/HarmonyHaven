module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/lib/**/*.js",
    'node_modules/preline/dist/*.js',
   
  ],
  theme: {
    extend: {
      colors: {
        verde: "#609a93" ,
        verdeclaro: "#8ab4ac",
        verdeoscuro: "#2e4e4a",
        naranja:"#ff8c42"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],
};
