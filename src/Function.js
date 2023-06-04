import Complex from "./Complex.js"
import Operation from "./Operation.js"
import Utils from "./Utils.js"

export default {
    cos,
    sin,
    zeta,
}

function sin(a) {
    let left = Operation.exp(Operation.multiply(Complex.i(), a))
    let right = Operation.exp(Operation.multiply(new Complex(0,-1), a))

    return Operation.divide(Operation.soustract(left, right) ,Operation.multiply(2, Complex.i()))
}

function cos(a) {
    let left = Operation.exp(Operation.multiply(Complex.i(), a))
    let right = Operation.exp(Operation.multiply(new Complex(0,-1), a))

    return Operation.divide(Operation.add(left, right) , 2)
}

function zeta(s, t = 50) {
    let tot = Complex.getNum(0);
    
    for(let n = 0; n <= t; n++) {
        const coef = 2**(-n-1);

        let subtot = Complex.getNum(0);

        for(let k = 0; k <= n; k++) {
            const constant = ((-1)**k)*Utils.binom(n,k)

            subtot = Operation.add(subtot, Operation.multiply(constant, Operation.pow(k+1, Operation.multiply(-1, s))))
        }
    
        tot = Operation.add(tot, Operation.multiply(coef, subtot))
    }

    const finalCoef = Operation.inverse(Operation.soustract(1, Operation.pow(2, Operation.soustract(1,s))))

    return Operation.multiply(finalCoef, tot);
}