//import sum from "./sum.js";
//import * as test from "node:test";

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});



