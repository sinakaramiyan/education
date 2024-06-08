/** @type {import('tailwindcss').Config} */
module.exports = {
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

