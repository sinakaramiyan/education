/** @type {import('tailwindcss').Config} */
module.exports = {
  //enable dark mode in tailwind css
  darkMode: 'class',
  content: [
    "./views/**/*.ejs",
    "./public/**/*.js",
  ],
  theme: {
    screens: {
      'sm': {'max': '601px'},

      'md': {'max': '1280px'},

      'lg': {'max': '1920px'},
    },
  },
    // for use font in tags : font-IRANSansXV
    // fontFamily: {
    //   IRANSansXV: ["IRANSansXV", "IRANSansXV"],
    // }
  plugins: [],
}

