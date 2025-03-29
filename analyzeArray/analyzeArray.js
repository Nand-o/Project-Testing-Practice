function analyzeArray(arr) {
    const max = arr.reduce((a, b) => Math.max(a, b));
    const min = arr.reduce((a, b) => Math.min(a, b));
    const length = arr.length;
    let sum = 0;
    arr.forEach(num => sum += num);
    const average = sum / length
    return {average: average, min: min, max: max, length: length};
}

module.exports = analyzeArray