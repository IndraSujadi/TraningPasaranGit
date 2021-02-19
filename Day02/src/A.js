let o = {
    'one' : 'hello',
    'two' : 'world'
}

let keys = Object.keys(o);
console.log(keys);
for(let key of keys) {
    console.log(o[key]);
}