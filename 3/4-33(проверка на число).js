function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
console.log (isNumeric(Infinity));