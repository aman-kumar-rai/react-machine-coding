import { MIN, MAX } from "./constants.js";

const getClampedValue = (value) => {
    return Math.min(Math.max(value, MIN), MAX);
}

export {
    getClampedValue
}