

module.exports.parse = parse;

function parse (data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
}


module.exports.stringify = stringify;

// [, replacer [, space]]
function stringify (obj, replacer, space) {
  return JSON.stringify(obj, replacer, space);
}