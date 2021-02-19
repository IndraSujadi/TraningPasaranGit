"use strict";
// function sleep(ms: number) {
//   const sleepPromise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
//   return sleepPromise;
// }
// const promise = sleep(5000);
// promise.then((time) => console.log(time));
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
sleep(1500).then(function (result) {
    console.log(result);
});
//# sourceMappingURL=sleep.js.map