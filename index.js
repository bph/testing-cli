const captureWebsite = require('capture-website');
(async () => {
    await captureWebsite.file('https://wordpress.org/download/counter/', 'screenshot7.png')
})();