function sendGet() {
    var userFirstName = document.getElementById("first-name").value;
    var userLastName = document.getElementById("last-name").value;
// var lname = 'Petya';
// var fname = 'Ivanov';
var url = "/userDataGet?fName=" + userFirstName + "&lName=" + userLastName;
    promiseServerCallGet(url).then(
        function (response) {
        alert(response + "@gmail.com");
    },
        function (error) {
            alert(error);
        }
    )
}
function promiseServerCallGet(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function(){
            if (this.status === 200) {
                resolve(this.response);
            }
            else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function(){
            reject(new Error("Network error"));
        };
        xhr.send();
    });
}
function sendPost() {
    promiseServerCallPost().then(
        function (response) {
        alert(response + "@gmail.com");
    },
        function (error) {
            alert(error);
        }
    )
}
function promiseServerCallPost() {
    return new Promise(function (resolve, reject) {
        var userData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            };
        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'userDataPost');
        // xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function(){
            if (this.status === 200) {
                resolve(this.response);
            }
             else {
                 let error = new Error(this.statusText);
                 error.code = this.status;
                 reject(error);
            }
        };
        xhr.onerror = function(){
            reject(new Error("Network error"));
        };

        xhr.send(JSON.stringify(userData));
    });
}
