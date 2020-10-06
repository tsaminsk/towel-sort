
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    if (!matrix || !Array.isArray(matrix) || matrix.length == 0) return result
    matrix.forEach((arr, ind) => {
        result = result.concat(ind % 2 == 0 ? arr : arr.reverse())
    })
    return result.sort((a, b) => (b - a) > 0);
}
