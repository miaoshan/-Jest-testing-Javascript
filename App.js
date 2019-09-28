export const hello = () => 'hello';

export const removeSNames = names => {
    let newNames = names;
    names.forEach(name => {
        if (name.toLowerCase().charAt(0) == 's') {
            const index = newNames.indexOf(name);
            newNames.splice(index, 1);
        }
    })
    return newNames;
}


export const add = (x, y) => {
    if (typeof x != 'number' || typeof y != 'number') {
        return null;
    }
    return x + y;
}

// export const add=(x,y)=> x+y;

export const total =(deliveryCost, subTotal)=>{
    return "£" + add(deliveryCost, subTotal);
}