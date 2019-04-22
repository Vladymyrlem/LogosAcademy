// Получение всех пользователей

function GetUsers() {
    $.ajax({
        url: "/api/usersGet",
        type: "GET",
        contentType: "application/json",
        success: function (users) {
            var rows = "";
            $.each(users, function (index, user) {
                // добавляем полученные элементы в таблицу
                rows += row(user);
            });
            $("table tbody").append(rows);
        }
    });
}
// Получение одного пользователя
function GetUser() {
    $.ajax({
        url: "/api/usersGet",
        type: "GET",
        contentType: "application/json",
        success: function (user) {
            var form = document.forms["userForm"];
            form.elements["f_name"].value = user.f_name;
            form.elements["l_name"].value = user.l_name;
            form.elements["age"].value = user.age;
            form.elements["adr"].value = user.adr;
        }
    });
}

function resetData(){
    $("#f_name").val("");
    $("#l_name").val("");
}
$.ajaxSetup({
    timeout: 2000,
    cache: false
});
