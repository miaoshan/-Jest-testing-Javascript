import {
    hello,
    add
} from './App';

describe('hello', () => {
    it('should output hello', () => {
        expect(hello()).toBe('hello');
    })
})

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-2, 2)).toBe(0);
        expect(add(0, 2)).toBe(2);
        expect(add(-3, -2)).toBe(-5);
    });
    it('shoudl not add strings', () => {
        expect(add(2, '2')).toBe(null);
    });
    it('shoudl not add objects', () => {
        expect(add(2, {})).toBe(null);
    });
    it('shoudl not add arrays', () => {
        expect(add(2, [])).toBe(null);
    });
});






test('Fake Test', () => {

    expect(true).toBeTruthy
})