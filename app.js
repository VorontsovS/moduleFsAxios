const axios = require('axios');
const fs = require('fs');
const path = require('path');
let dataSwapi;

const init = async () => {
    const result = await axios.get('https://swapi.dev/api/planets/1/');
    dataSwapi = result.data.name;
}

const makeFile = async () => {
    await init();
    console.log('data:', dataSwapi);
    fs.writeFile(
        path.join(__dirname, '', `${Date.now()}.txt`), 
        `${dataSwapi}`, 
        (err) => {
            if(err) throw err;
            console.log('File written');
        }
    );    
}

makeFile ();