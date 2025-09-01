const repeatString = function (s, n) {
    if (n < 0) return 'ERROR'
    repeated = ''
    for (let i = 0; i < n; i++) {
        repeated += s
    }
    return repeated
};

// Do not edit below this line
module.exports = repeatString;
