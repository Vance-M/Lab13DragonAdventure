// IMPORT MODULES under test here:
import { findById } from '../utils.js';
import { determineHealth } from '../results/resultsutils.js';

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

test('test determineHealth for health=30', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const user = {
        name: 'Test Dummy',
        hp: 30,
        gold: 25
    };

    const expected = `Although ${user.name} did slay the dragon, Mordulech, they did suffer perilous wounds. They lived thier days assisted by aid the wealth they had found was able to provide`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = determineHealth(user);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.innerHTML, expected);
});
