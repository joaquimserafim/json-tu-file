# json-tu-file

<a href="https://nodei.co/npm/json-tu-file/"><img src="https://nodei.co/npm/json-tu-file.png"></a>

A simple way to read/write JSON from files.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/json-tu-file)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/json-tu-file/blob/master/LICENSE)[![npm - v1.4.1](https://img.shields.io/badge/npm-v1.4.1-blue.svg?style=flat-square)](https://www.npmjs.com/package/json-tu-file)


##Usage


    var JSONFile = require('json-tu-file');
    
    var obj = {
        "n":8,
        "msg":"Hello World 7bc59b8e-8a3f-2d04-62eb-8c9f5c39606f",
        "tmx":1388775322979
    };
    

    // writeFile(obj, 'file, [options], callback(err))
    
    JSONFile.writeFile(obj, 'write.json', {encoding: 'ascii'}, function (err) {
        if (err) throw err;
        
        console.log('ok');
    });
    
    // options: Object
    //    encoding String | Null default = 'utf8'
    //    mode Number default = 438 (aka 0666 in Octal)
    //    flag String default = 'w'
    
    
    // writeFileSync(obj, file, [options])
    
    JSONFile.writeFileSync(obj, 'write_sync.json', {encoding: 'ascii'});   
          
    
    // readFile(file, callback(err, data))
    
    JSONFile.readFile('write.json', function (err, data) {
        if (err) throw err;
        
        console.log(data);
    });
    
    
    //readFileSync(file)
    
    var data = JSONFile.readFileSync('write.json');


## Development

**this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit**

to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
