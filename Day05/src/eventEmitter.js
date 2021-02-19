class EventEmitter{
    eventList = new Map();
    addListener (eventName, fn){
        let functionList = this.eventList.get(eventName);
        if(functionList == null){
            functionList = new Set();
            this.eventList.set(eventName,functionList);
        } 
        functionList.add(fn);  
        return {
            unsubscribe : () => {
                if(functionList) {
                functionList.delete(fn);   
                }     
            }
        }
    }

    removeListener (eventName, fn){
        let functionList = this.eventList.get(eventName);
        if(functionList) {
            functionList.delete(fn);   
        }     
    }

    emit (eventName) {
        let functions = this.eventList.get(eventName);
        if(functions) {
            for(let func of functions) {
                func();
            } 
        } else {
            console.log("Event belum dibuat!");
            
        }
    }

}

let myEmitter = new EventEmitter();
let count = 0;

let testFunction = () => {
    count +=1;
}
myEmitter.addListener('login',testFunction).unsubscribe();
// myEmitter.addListener('login',()=>{console.log(`your exp : 5000`);});
// myEmitter.removeListener('login',testFunction);
myEmitter.emit('login');
console.log(count);