export default class Complex {
    re = 0;
    im = 0;

    constructor(re,im) {
        this.re = re;
        this.im = im;
    }

    toString() {
        return this.re + ' + ' + this.im + 'i';
    }

    module() {
        return Math.sqrt((this.re**2) + (this.im)**2)
    }

    conj() {
        return new Complex(this.re, -this.im);
    }

    arg() {
        if(this.re == 0) {
            return Math.sign(this.im) * Math.PI / 2
        }

        let prime = Math.atan(this.im / this.re)

        if(this.re > 0) {
            return prime;
        } else if(this.re < 0 && this.im >= 0) {
            return prime + Math.PI
        } else if(this.re < 0 && this.im < 0) {
            return prime - Math.PI
        }
    }

    static i() {
        return new Complex(0,1)
    }

    static getNum(n) {
        return new Complex(n, 0)
    }
}