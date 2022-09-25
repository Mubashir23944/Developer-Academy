var arr = ['a','b','c','d','e','f','g','h',1,2,3,4,5,6,7,8,true,false,true,false,true,false,true,false , ['Abc'],['Xyz'],['Etc'],['...']];
var resultArr = []
var stringArr = []
var numberArr = []
var boolerArr = []
var objArr = []
for (var index = 0; index < arr.length; index++) {
    if(typeof arr[index] == 'string'){ //Condition to check string data type
        stringArr.push(arr[index]) 
    }
    if(typeof arr[index] == 'number'){ //Condition to number string data type
        numberArr.push(arr[index]) 
    }
    if(typeof arr[index] == 'boolean'){ //Condition to check boolean data type
        boolerArr.push(arr[index]) 
    }
    if(typeof arr[index] == 'object'){ //Condition to check object data type
        objArr.push(arr[index]) 
    }
}

resultArr.push(stringArr, numberArr, boolerArr, objArr) //pushing chunks into the result array
console.log(resultArr);