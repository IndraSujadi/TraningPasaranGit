var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = {};
    }
    // constructor() {
    // }
    DataStore.prototype.set = function (item, price) {
        // simpan data 
        this.data[item] = { itemName: item, price: price };
    };
    DataStore.prototype.get = function (item) {
        // Return  value of the key
        console.log(this.data[item]);
    };
    DataStore.prototype.forEach = function (fn) {
        var keys = Object.keys(this.data);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            fn(key, this.data[key].price);
        }
    };
    return DataStore;
}());
var d = new DataStore();
d.set('Apple', 12000);
d.set('Grape', 25000);
console.log("Hasil method get");
d.get('Grape');
d.get('Apple');
console.log("Hasil method forEach");
d.forEach(function (item, price) {
    console.log(item, ':', price);
});
console.log(d.data);
