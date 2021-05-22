const add = require("./sample");

describe("A sample test", () => {
    it("used for demonstrative purposes", () => {
        expect(add(1,2)).toEqual(3);
    });

    // uncomment this test to demonstrate a pipeline failure due to test failure:
    // it("fails the pipeline if the test is nonsense", () => {
    //    expect(add(10, 10)).toEqual(42);
    // });
})
