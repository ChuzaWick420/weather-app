function toFaren(value) {
    let result = (value * 9 / 5) + 32;
    return result.toFixed(0);
}

function toCel(value) {
    let result = (value - 32) * 5 / 9;
    return result.toFixed(0);
}

export { toFaren, toCel };