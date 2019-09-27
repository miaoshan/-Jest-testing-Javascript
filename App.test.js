import {hello} from './App';

describe('hello', ()=>{
    it('should output hello', ()=>{
        expect(hello()).toBe('hello');
    })
})


test('Fake Test', ()=> {

    expect(true).toBeTruthy
})