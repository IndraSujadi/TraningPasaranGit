// @flow

//  type = incoming, outgoing, missed call
// let log= {
//     type: "INCOMING", phoneNumber: "081297129561", timeStamp: '2020-12-25 12.31'
// };


type CallType = 'INCOMING' | 'OUTGOING' | 'MISSED';
   
type Call = {
    type:CallType;
    phoneNumber:string;
    timeStamp:string;
};

// factory 
function createCallLog() {
    let callLog: Array<Call> = [];
    return {
        add: (type: CallType, phoneNumber: string) => {
            //TODO
            let log = {
                type: type,
                phoneNumber : phoneNumber,
                timeStamp: new Date().toISOString() 
                // .toISOString() method returns a string in simplified extended ISO format 
            };
            callLog.push(log);
        },
        getRecent: () => {
            // TODO : return an array objects (representing call records)
            let recent= [];
           
            if(callLog.length <= 5) {
                recent = callLog;
            } else {
                for(let i=1; i<=5;i++) {
                    let idx = i+(callLog.length-5);
                    recent.push(callLog[idx -1]);
                }
                
            }
             
            return recent;
        }
    }
}

let calHist = createCallLog();

calHist.add("MISSED", "081297138561");
calHist.add("MISSED", "081297138562");
calHist.add("INCOMING", "081297138563");
calHist.add("MISSED", "081297138564");
calHist.add("OUTGOING", "081297138565");
calHist.add("MISSED", "081297138566");

// calHist.add("MISSED CALL", 81297138561);

console.log(calHist.getRecent());

