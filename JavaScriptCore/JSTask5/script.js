function checkAge(age) {
    var x = window.prompt('Enter yout age',"");
   if(x == null){
       document.write("You enter cancel")
   }else{
    var message =  (age > 18) ?  true  : "Do You have permission?";
    document.write(message)
    }
}
function findMin(arr) {
    var min = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
Array.prototype.min = function(){
    var min = parseInt(this[this.length-1]), el;
    for(var i=this.length-2; i>=0; i--){
        el = parseInt(this[i]);
        if(el<min){
            min = el;
        }
    }
    return min;
};

function getMinValue() {
     var arr = document.getElementById('val').value;
     var val = arr.split(',');
//alert(val.min);
alert(findMin(val));
}
