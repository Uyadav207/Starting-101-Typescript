function combine(input1:number | String, input2:number | String) {
    let res;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        res = input1 + input2;
    }else {
        res = input1.toString() + input2.toLocaleString();
    }
    return res;
}


const combination = combine(30,30);
console.log(combination);

const  combineString = combine('Max ', 'Mirinda');
console.log(combineString);
