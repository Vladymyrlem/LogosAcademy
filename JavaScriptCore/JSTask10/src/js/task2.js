function truncate(str,maxlength) {
    if(str.length > maxlength){
        return str.slice(0,maxlength-4) + '...';
    }
    return str;
}
function truncateResult(str,lnt) {
    str = document.getElementById('task2').value;
    lnt = document.getElementById('length').value;
    alert(truncate(str,lnt));
}