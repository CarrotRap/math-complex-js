import Complex from "./Complex.js"

export default {
    add,
    soustract,
    multiply,
    inverse,
    divide,
    exp,
    ln,
    pow,
}

function toComplex(...l) {
    const t = [];

    for(let i = 0; i < l.length; i++) {
        if(typeof l[i] == 'number') {
            t[i] = Complex.getNum(l[i])
        } else {
            t[i] = l[i]
        }
    }

    return t;
}

function add(a,b) {
    [a,b] = toComplex(a,b);

    return new Complex(a.re + b.re, a.im + b.im);
}

function soustract(a,b) {
    [a,b] = toComplex(a,b);

    return new Complex(a.re - b.re, a.im - b.im);
}

function multiply(a,b) {
    [a,b] = toComplex(a,b);

    return new Complex((a.re * b.re) - (a.im * b.im), (a.re * b.im) + (a.im * b.re))
}

function inverse(a) {
    [a] = toComplex(a);

    let d = (a.re**2) + (a.im**2)
    return new Complex(a.re / d, -a.im / d)
}

function divide(a,b) {
    [a,b] = toComplex(a,b);

    return multiply(a, inverse(b))
}

function exp(a) {
    [a] = toComplex(a);

    if(typeof a == "number") {
        return new Complex(Math.cos(a), Math.sin(a))
    }

    let c = new Complex(Math.cos(a.im), Math.sin(a.im));
    return multiply(Complex.getNum(Math.exp(a.re)), c)
}

function ln(a) {
    [a] = toComplex(a);

    let mod = a.module();
    let arg = a.arg();

    if(mod == 0) return NaN;

    return new Complex(Math.log(mod), arg)
}

function pow(a,b) {
    [a,b] = toComplex(a,b);

    return exp(multiply(b, ln(a)))
}