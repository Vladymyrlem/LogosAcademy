function filterRange(arr, a, b) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }

    return result;
}

var myArray = [7, 12, 23, 18, 0];

var filtered = filterRange(myArray, 7, 25);
alert( filtered );