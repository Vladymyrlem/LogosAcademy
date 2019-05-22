$(document).ready(function () {
    let now = new Date();

    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);

    let today = (day)+"-"+(month)+"-"+ now.getFullYear();


    $('#getDate').val(today);

    $('#date_btn').click(function(){
        getDate();
    });

});
function getDate()
{
    birthday = $('#datePicker').val();
    new_date = moment(new Date(birthday));
    var getDay = moment(new_date,"dddd").add(20,'years').format('dddd, MMMM Do YYYY');
    $('#getDate').text(getDay);
}