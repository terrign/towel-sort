
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []
  if ([...arguments][0] == undefined) {
      return result;
  } else {
  let newMatrix = matrix.map((a,i) => i % 2 == 1? a.reverse() : a)
  newMatrix.forEach(a => a.forEach(v => result.push(+v)))
  return result
  }
}
