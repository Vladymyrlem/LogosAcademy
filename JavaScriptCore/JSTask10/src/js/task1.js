function myFunc(str) {
var str = window.prompt("Enter you word",'');
if(!str)  return str;
    var res =  str[0].toUpperCase() + str.slice(1);
alert(res);
}
