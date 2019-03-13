function find(array, value) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
    }

    return -1;
}
arr = ["myArray", 4, 17.25, false];

var res1 = find(arr, "myArray"); // 0
var res2 = find(arr, 2); // -1
var res3 = find(arr, 4); // 1
var res4 = find(arr, 3.5); //-1var
var res5 = find(arr, 17.25); //2
result =[res1,res2,res3,res4,res5];
alert(result);