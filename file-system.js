const fs = require('fs');

fs.writeFileSync('welcome.txt', 'Hello Node');

fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(data)
});
