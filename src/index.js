module.exports = function towelSort(matrix) {
  if (undefined === matrix || 0 === matrix.length) {
    return [];
  }
  
  let result = []

  matrix.forEach( (value, index) => {

    if (index % 2 === 1) {
      result = result.concat(value.reverse())
    }

    if (index % 2 === 0) {
      result = result.concat(value)
    }
  })

  return result;
};