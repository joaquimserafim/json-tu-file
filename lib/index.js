var fs = require('fs');

function JSONValid (data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}

module.exports = JSONFile;

function JSONFile () {
  if (!(this instanceof JSONFile)) return new JSONFile();
  JSONFile.init.call(this);
}

JSONFile.init = function () {
  this._spaces = 2;
};

JSONFile.prototype.readFile = function (file, cb) {
  fs.readFile(file, 'utf8', function cb_readFile (err, data) {
    if (err) return cb(err);

    var obj = JSONValid(data);

    return cb(obj ? null : new TypeError('Type Error: cannot parse data.'), obj);
  });
};

JSONFile.prototype.readFileSync = function (file) {
  return JSONValid(fs.readFileSync(file, 'utf8'));
};

JSONFile.prototype.writeFile = function(obj, file, options, cb) {
  if (!cb) {
    cb = options;
    options = null;
  }

  var str = JSON.stringify(obj, null, this._spaces);

  fs.writeFile(file, str, options, cb);
};

JSONFile.prototype.writeFileSync = function(obj, file, options) {
  var str = JSON.stringify(obj, null, this._spaces);
  fs.writeFileSync(file, str, options);
};