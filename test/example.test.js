// IMPORT MODULES under test here:
import { findById } from '../utils.js';

const test = QUnit.test;

test('test findById', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const A = {
        id: 1,
        letter: 'A'
    };

    const B = {
        id: 2,
        letter: 'B'
    };
    const C = {
        id: 3,
        letter: 'C'
    };

    let testArray = [
        A,
        B,
        C
    ];
    const expected = {
        id: 2,
        letter: 'B'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(testArray, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
