
function setCookie() {
// if(navigator.cookieEnabled){
     let userName = $('#inputName').val();
     let userAge = $('#inputAge').val();
     if(userAge !== "" && userName !== ""){
         var d = new Date();
         d.setTime(d.getTime() + 3600000);
         var End_date = d.toUTCString();
         let Str1 = "Name=" + escape(userName);
         Str1 += "; expires = " + End_date + ";";
         document.cookie = Str1;
         Str1 = "Name=" + escape(userAge);
         Str1 += "; expires = " + End_date + ";";
         document.cookie = Str1;
         $('#inputName').val = "";
         $('#inputAge').val = ""
     }
//}
}

function getCookie() {
    // if(document.cookie){
    //     alert('браузер поддерживает cookie');
    // }
if(navigator.cookieEnabled){
    var output = $("#outputBox"); //ссылка на список в DOM
if(document.cookie !== ""){
    var arr1,arr2;
    let userName = $('#inputName').val();
    let userAge = $('#inputAge').val();
    var obj = {};
    let Str = document.cookie;
    if(Str.indexOf('') !== -1){
        arr1 = Str.split(";")
        for(let i = 0; i < arr1.length; i++){
            arr2 = arr1[i].split("=");
            obj[arr2[0]] = arr2[1];
        }
    }
    else{
        arr2 = Str.split("=");
        obj[arr2[0]] = arr2[1];
    }
    Str = "Hello, " + unescape(userName).replace("<", "&lt;");
    Str += " Your age is" + unescape(userAge).replace("<", "&lt;");
    output.html("Get cookie: " + Str);
}
else {
    output.html("")
}
}
}
function delCookie(strName) {
    if(navigator.cookieEnabled) {
        document.cookie = strName + "=0; expires="
            + (new Date(0)).toUTCString();
    }
}
function getLocalStorage() {
    var output = $("#outputBox"); //ссылка на список в DOM
     let userName = $('#inputName').val();
     let userAge = $('#inputAge').val();
     let dataArray = [userName,userAge];
    let local_value = localStorage.getItem('local');
    // let person = JSON.parse(local_value);
    output.html("Read localstorage: " + local_value);
}

function setLocalStorage() {
    let userName = $('#inputName').val().trim();
    let userAge = $('#inputAge').val().trim();
    if(userAge && userName) {
        var local = localStorage.getItem("local");
        var people;
        if(local) { //если localStorage хранит массив
            people = JSON.parse(local);
        } else { //иначе
            people = [];
        }

        //записываем пользователя в массив
        people.push({
            name: userName,
            age: userAge
        });
        //сохраняем новый массив
        localStorage.setItem("local", JSON.stringify(people));
userName = " ";
userAge = " "
    }else {
        alert("Поля не должны быть пустыми!")
    }
}

// function clean() {
//     localStorage.removeItem("local");
// }