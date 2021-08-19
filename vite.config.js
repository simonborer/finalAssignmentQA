// If you DON'T have "type": "module" in your package.json, use this file. 
// Otherwise use https://gist.github.com/simonborer/4ab0b12486703f46df664f22c9647a23

// Add this file to the root of your project
// vite.config.js
const { resolve } = require('path')

// Just make sure you reference your html files correctly
// if your page is called `q_a.html` or whatever, just changes
// the reference here
module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qa: resolve(__dirname, 'qa.html'),
        security: resolve(__dirname, 'security.html'),
        bad: resolve(__dirname, 'badexample.html')
      }
    }
  }
}
