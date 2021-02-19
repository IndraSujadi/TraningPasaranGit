// Task Generator : Fibbonacci
//  untuk kirim nilai keluar dari generator itu di setelah yield
function* Fibbonacci() {
  let prevNum = 0;
  let currentNum = 1;
  yield currentNum;
  while (true) {
    const newNum = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = newNum;
    const nilai = yield currentNum;
    console.log(nilai);
  }
}

const gen = Fibbonacci();
for (let i = 0; i < 11; i++) {
  console.log(gen.next("dpr").value);
}
