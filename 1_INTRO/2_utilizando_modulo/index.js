const fs = require('fs') //file system

fs.readFile('arquio.txt', 'utf8', (err, data) => {

    if(err) {
        console.log(err);
        
    }

    console.log(data);
    

})

