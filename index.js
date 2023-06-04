import Complex from "./src/Complex.js";
import Function from "./src/Function.js";
import Operation from "./src/Operation.js";
import Utils from "./src/Utils.js";

export default {
    Complex,
    ...Function,
    ...Operation,
    ...Utils
}