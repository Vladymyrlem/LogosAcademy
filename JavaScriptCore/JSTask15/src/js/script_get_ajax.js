function sendGet() {
    var out = "";
    var a = parseInt(my_form.age.value);
    if (isNaN(my_form.age.value) || a <= 1 || a >= 100) {
        my_form.age.value = "Fail!";
        return;
    } else {
        var formData = {
            lName: my_form.lName.value,
            fName: my_form.fName.value,
            age: my_form.age.value,
            address: my_form.address.value
        };

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/formGet?lName=" + formData.lName + "&fName=" + formData.fName + "&age=" +
            formData.age +
            "&address=" + formData.address);
        xhr.send();
    }
}