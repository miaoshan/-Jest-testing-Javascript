import {hello, add, removeSNames} from './App';

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

describe('removeSNames', ()=>{
    it('should remove all s names', ()=>{
     const names =['Scott', "Lucy", "Sindy"];
     expect(removeSNames(names)).not.toContain('Scott');
     expect(removeSNames(names)).not.toContain('Sindy');

    });
    it('should not remove other names', ()=>{
     const names =['Scott', "Lucy", "Kirsty"];
     expect(removeSNames(names)).toContain('Lucy');
     expect(removeSNames(names)).toContain('Kirsty');
    });
    it('should account for cass', ()=>{
     const names =['Scott', "Lucy", "Kirsty", "Sabrina"];
     expect(removeSNames(names)).not.toContain('Scott');
     expect(removeSNames(names)).not.toContain('Sabrina');
    });
})





test('Fake Test', () => {

    expect(true).toBeTruthy
})