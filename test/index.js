'use strict';

var test = require('tape');
var json2file = require('../index');
var join = require('path').join;

var obj = {
  n:  8,
  msg: 'Hello World 7bc59b8e-8a3f-2d04-62eb-8c9f5c39606f',
  tmx: 1388775322979
};

var file = join(__dirname, 'fixtures/write.json');

test('write a json into a file', function(assert) {
  json2file.writeFile(obj, file, function(err) {
    if (err) {
      assert.fail(err);
    } else {
      assert.ok('wrote a json object with success into a file.');
      assert.end();
    }
  });
});

test('write a json into a file with options', function(assert) {
  json2file.writeFile(obj, file, {encoding: 'utf8'}, function(err) {
    if (err) {
      assert.fail(err);
    } else {
      assert.ok('wrote a json object with success into a file.');
      assert.end();
    }
  });
});

test('write sync a json into a file', function(assert) {
  try {
    json2file.writeFileSync(obj, file);
    assert.ok('wrote a json object with success into a file.');
    assert.end();
  } catch (ex) {
    assert.fail(ex);
  }
});

test('read a json from a file', function(assert) {
  json2file.readFile(file, function(err, json) {
    if (err) {
      assert.fail(err);
    } else {
      assert.deepEqual(typeof json, 'object');
      assert.end();
    }
  });
});

test('try to read a json from a file don\'t exist', function(assert) {
  var badFile = join(__dirname, 'fixtures/writee.json');
  json2file.readFile(badFile, function(err) {
    if (err) {
      assert.pass(err);
      assert.end();
    }
  });
});

test('try to read a bad json from a file' , function(assert) {
  var badJson = join(__dirname, 'fixtures/bad_json_file.json');
  json2file.readFile(badJson, function(err) {
    if (err) {
      assert.pass(err);
      assert.end();
    }
  });
});

test('read sync a json from a file', function(assert) {
  try {
    var json = json2file.readFileSync(file);
    assert.deepEqual(typeof json, 'object');
    assert.end();
  } catch (ex) {
    assert.fail(ex);
  }
});
