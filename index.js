'use strict';

var fs = require('fs');
var stringify = require('json-stringify-safe');

//
//  json-tu-file LIB
//

var jsonTuFile = module.exports;

jsonTuFile._spaces = 2;

jsonTuFile.jsonParse = function _parse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return;
  }
};

jsonTuFile.stringify = stringify;

jsonTuFile.readFile = function readFile(file, cb) {
  var self = this;
  fs.readFile(file, 'utf8', function readFileCb(err, data) {
    if (err) {
      cb(err);
    } else {
      var obj = self.jsonParse(data);

      if (!obj) {
        cb(new Error('Invalid JSON structure!'));
      } else {
        cb(null, obj);
      }
    }
  });
};

jsonTuFile.readFileSync = function readFileSync(file) {
  return this.jsonParse(fs.readFileSync(file, 'utf8'));
};

jsonTuFile.writeFile = function(obj, file, options, cb) {
  if (!cb) {
    cb = options;
    options = null;
  }

  var str = this.stringify(obj, null, this._spaces);
  fs.writeFile(file, str, options, cb);
};

jsonTuFile.writeFileSync = function writeFileSync(obj, file, options) {
  var str = this.stringify(obj, null, this._spaces);
  fs.writeFileSync(file, str, options);
};
