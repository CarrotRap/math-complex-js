import Complex from "./Complex.js"
import Operation from "./Operation.js";

export default {
    serie,
    binom
}

function serie(func, start = 0, precision = 100000) {
    let total = Complex.getNum(0);

    for(let i = start; i < precision; i++) {
        total = Operation.add(total, func(Complex.getNum(i)))
    }

    return total;
}

function binom(n, k) {
    k = n - k < k ? n - k : k;
    var a = new Array(k + 1);
    a[0] = 1;
    for (var i = 1; i <= k; i++) a[i] = 0;
    for (var i = 0; i < n; i++) {
        for (var j = k; j >= 1; j--) a[j] += a[j - 1];
    }
    return a[k];
};