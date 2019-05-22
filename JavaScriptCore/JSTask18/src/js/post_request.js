// Добавление пользователя
// SUBMIT FORM

$("#userForm").submit(function (event) {
    event.preventDefault();
    PostUser();
});
function PostUser() {
    var formData = {
        userFirstName: $("#f_name").val(),
        userLastName: $("#l_name").val(),
        userAge: $('#age').val(),
        userAddress: $('#adr').val()
    };
    $.ajax({
        url: "api/usersPost",
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify(formData),
        dataType: 'json',
        success: function (user) {
            $("table tbody").append(row(user));
            // $("table tbody").append(
            //     user.f_name + user.l_name
            // )
        },
        error : function(e) {
            var a = parseInt($('#age').value);
            if (isNaN($('#age').val()) || a <= 1 || a >= 100) {
                form.age.value = "Fail!";
                return;
            }
        }
    });
    resetData();

}
var row = function (user){
    return "<tr><td class='first_name'>" + user.f_name + "</td>" +
        "<td class='last_name'>" + user.l_name + "</td>"+ "<td >" + user.age +"</td> <td class='user_address'>" + user.adr + "</td></tr>";
};

function resetData(){
    $("#f_name").val("");
    $("#l_name").val("");
    $("#age").val("");
    $("#adr").val("")
}

// нажимаем на ссылку Изменить
// $("body").on("click", ".editLink", function () {
//     var id = $(this).data("id");
//     GetUser(id);
// });

// загрузка пользователей
GetUsers();
