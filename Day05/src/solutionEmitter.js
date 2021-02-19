var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.eventList = new Map();
    }
    EventEmitter.prototype.addListener = function (eventName, fn) {
        var functionList = this.eventList.get(eventName);
        if (functionList == null) {
            functionList = new Map();
            this.eventList.set(eventName, functionList);
        }
        var id = functionList.size;
        functionList.set(id, { method: fn });
        // To Do : Make an id and save something
        return id;
    };
    // removeListener (eventName: string, fn: Function){
    //     let functionList = this.eventList.get(eventName);
    //     if(functionList) {
    //      functionList.delete(fn);   
    //     }  
    // }
    EventEmitter.prototype.removeListenerById = function (eventName, id) {
        var functionList = this.eventList.get(eventName);
        functionList["delete"](id);
    };
    EventEmitter.prototype.emit = function (eventName) {
        var functionList = Array.from(this.eventList.get(eventName).values());
        // console.log(this.eventList.get(eventName));
        // functionList = Array.from(functionList);
        if (functionList) {
            for (var _i = 0, functionList_1 = functionList; _i < functionList_1.length; _i++) {
                var objItem = functionList_1[_i];
                console.log(functionList);
                //    let run =functionList.get(id);
                //    run.method();
                objItem.method();
            }
        }
        else {
            console.log("Event belum dibuat!");
        }
    };
    return EventEmitter;
}());
var myEmitter = new EventEmitter();
myEmitter.addListener('login', function () { console.log("You're logged in!"); });
var hello = myEmitter.addListener('login', function () { console.log("your exp : 5000"); });
myEmitter.removeListenerById('login', hello);
// myEmitter.removeListenerById('login', 1);
myEmitter.emit('login');
// * nyoba bukan class
// let listenerList = new Map();
// function addListener (eventName :string, fn: Function){
//     this.listenerList.set(eventName, fn);
// }
// function emit (eventName: string) {
//     console.log(listenerList.get(eventName));
// }
