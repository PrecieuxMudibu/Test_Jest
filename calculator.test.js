import { mathOperations } from './calculator';

describe('Calculator tests', () => {
    test('Addition : 1 + 2 should return 3', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });

    test('Substraction : 1 - 2 should return -1', () => {
        expect(mathOperations.diff(1, 2)).toBe(-1);
    });

    test('Multiplication : 1 * 2 should return 2', () => {
        expect(mathOperations.product(1, 2)).toBe(2);
    });
});
