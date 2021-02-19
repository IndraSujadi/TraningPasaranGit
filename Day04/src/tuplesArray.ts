// * record is like a tuple
//  tuple itu adalah list of item yang sudah diketahui berapa banyak itemnya dan sudah tahu tipenya 
// * dictionary lik as array

// tuple 
//  contoh ini berarti tuple karena fungsi do thing sudah pasti akan mengembalikan 2 item 
// dengan tipe data tertentu
type Answer = [string, number];

function doThing():Answer {
    let result = 'success';
    let numItemsChanged = 7;
    return [result, numItemsChanged];
}

// * note Array vs tuple
//  array bebas ada berapa jumlah itemnya asalkan isi didalam arraynya sama
//  tuple sudah pasti ada berapa item dan sudah ditentukan tipe nya.
type Employee = {id:string; name:string;}

type EmployeeList = Array<Employee>;
// * dictionatry vs record