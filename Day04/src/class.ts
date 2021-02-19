class Counter  {
    count:number = 0;
    // constructor(initialCount) {
    //     // Here we can receive the arguments from new Counter(....)
    //     this.count = initialCount;
    // }

    inc(){
        return this.count += 1;
    }

    dec() {
        return this.count -= 1;
    }

    getCount() {
        return this.count;
    }
}

let c = new Counter();
// property claa itu public
c.inc();

console.log(`All property are public: ${c.count}`);
console.log(`It should be same as: ${c.getCount()}`);

// di dalam factory function benar" mempunyai private variabel 
// sedangkan didalam class itu public jadi tidak sepenuhnya  private

