function secondtask() {
    var c = 10;
    var m = prompt('Введіть перше число',);
    var n = prompt('Введіть друге число',);

    var a = c-n;
    var b = c-m;

    if(a>b){
        alert("Число "+m+" ближче до "+c);
    }
    if (a<b) {
        alert("Число "+n+" ближче до "+c);
    }
}