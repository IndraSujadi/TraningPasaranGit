// setTimeout(function(), delay);
// clearTimeout untuk menghapus atau membatalkan setTimeout
// clearTimeout(setTimeout())
console.log("start");
setTimeout(() => {console.log('hello');}, 2000);

// contoh clear timeout
let timeout = setTimeout(()=>{console.log('Hi, Indra');},2000);

setTimeout(() => {
    console.log(`Hi Indra was cancelled`);
    clearTimeout(timeout);
}, 1000);
