 $(document).ready(function () {
//
//     $.ajax({
//         type: 'GET',
//         url: '/months.xml',
//         dataType: 'xml',
//         setInterval: 3000,
//         success: function (xml) {
//                 $(xml).find('month').each(function () {
//                     let month = $(this).find('month-name').text();
//                         setTimeout(function () {
//                             $('<li></li>')
//                                 .html(month)
//                                 .appendTo('div#update_target .months-list');
//                             $('li').show('slow');
//                             setTimeout(function () {
//                                 li = $('li:odd');
//                                 li.css('color','red');
//                             },500)
//                             }, 1000);
//             });
//         },
//     });
//
     var months = [
         {month: 'January'},
         {month: 'February'},
         {month: 'March'},
         {month: 'April'},
         {month: 'May'},
         {month: 'June'},
         {month: 'July'},
         {month: 'August'},
         {month: 'September'},
         {month: 'October'},
         {month: 'November'},
         {month: 'December'},
     ];
     setTimeout(function () {
for (let i = 0; i<months.length; i++) {
    var li = $('<li></li>');
setTimeout($('li').show('drop'),2000);
    li.html(months[i].month).appendTo('div#update_target .months-list');
    let list = $('li:odd');
    list.css('color','red');
}

     },1000);
     // setTimeout(function () {
     //                            li = $('li:odd');
     //                            li.css('color','red');
     //                        },3000);
 });
