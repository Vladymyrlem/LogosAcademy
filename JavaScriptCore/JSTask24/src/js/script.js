'use strict';
//let arr = _.range(-50,30,4);
//var lowEnd = -50;
//var lowStart = 30;
//let arr = [];
//while (lowEnd <= lowStart){
//arr.push(lowEnd+=4);
//}
let range = _.range(-50, 30,4);
   let i;
let  arr = [];

for (i in range) {

    if (range[i] <= 10) {

        arr.push(range[i]);
    }
    else {

        arr.push(range[i]);
    }
}
let data = _.shuffle(arr);
let arr_data = _.toArray(data);
// let max_val = _.max(arr_data);
let maxInd = _.findLastIndex(data);
let min_val = _.min(data);
let minInd = _.findIndex(data);
//console.log(b);
document.write(arr_data + '<br>' +'Index of min value:'+ '<br>' + minInd + '<br>' + 'Index of max val' + '<br>'+ maxInd);
