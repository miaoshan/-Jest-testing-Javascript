export const hello =()=> 'hello';

export const add=(x,y)=>{
    if(typeof x != 'number' || typeof y != 'number'){
        return null
    }
    return x+y;
}