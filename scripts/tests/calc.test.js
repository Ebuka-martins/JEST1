const addition = require("../calc");

describe("calculator", () => {
    describe("addition function", () => {
        test("should return 73 for 42, 31", () => {
            expect(addition(42, 31)). toBe(73);
        }) 

    })
    describe("subtraction function", () => {
        
    })
    describe("multiply function", () => {
        
    })
    describe("division function", () => {
        
    })
})

// // calculator.test.js
// const { addition } = require("../calc"); // Ensure the function is correctly imported

// describe("Calculator", () => {
//     describe("Addition function", () => {
//         test("should return 42 for 20, 22", () => {
//             expect(addition(20, 22)).toBe(42); // Fixed typo: extra space in `.toBe`
//         });
//     });

//     describe("Subtraction function", () => {
//         test("should return -2 for 20 - 22", () => {
//             expect(subtraction(20, 22)).toBe(-2); // Example for subtraction
//         });
//     });

//     describe("Multiplication function", () => {
//         test("should return 400 for 20 * 20", () => {
//             expect(multiply(20, 20)).toBe(400); // Example for multiplication
//         });
//     });

//     describe("Division function", () => {
//         test("should return 5 for 20 / 4", () => {
//             expect(division(20, 4)).toBe(5); // Example for division
//         });
//     });
// });
