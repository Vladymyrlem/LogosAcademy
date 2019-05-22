function calculate(oper)
{
    var n1 = parseFloat(document.getElementById('first-arg').value);
    var n2 = parseFloat(document.getElementById('sec-arg').value);
    var res;

    switch (oper)                       //Проверяем, какая кнопка
    {                                   //была нажата
        case 1:   //Кнопка +
        {
            res = n1 + n2;
            break;
        }
        case 2:   //Кнопка -
        {
            res = n1 - n2;
            break;
        }
        case 3:   //Кнопка *
        {
            res = n1 * n2;
            break;
        }
        case 4:   //Кнопка /
        {
            res = n1 / n2;
            break;
        }
    }
    while (true) {
        if (res == null) break;

        try {
            if (isNaN(res)) {
                throw new Error("Результат неопределён");
            }

            break;
        } catch (e) {
            alert( "Ошибка: " + e.message + ", повторите ввод" );
        }
    }
    document.getElementById('res').value = res;
}
// function GetResult(expr) {
//     var res;
//     while (true) {
//         // expr = prompt("Введите выражение?", '2-');
//         if (res == null) break;
//
//         try {
//             switch (expr)                       //Проверяем, какая кнопка
//             {                                   //была нажата
//                 case 1:   //Кнопка +
//                 {
//                     calculate(1);
//                     break;
//                 }
//                 case 2:   //Кнопка -
//                 {
//                     calculate(2);
//                     break;
//                 }
//                 case 3:   //Кнопка *
//                 {
//                     calculate(3);
//                     break;
//                 }
//                 case 4:   //Кнопка /
//                 {
//                     calculate(4);
//                     break;
//                 }
//             }
//             if (isNaN(res)) {
//                 throw new Error("Результат неопределён");
//             }
//             break;
//         } catch (e) {
//             alert( "Ошибка: " + e.message + ", повторите ввод" );
//         }
//     }
// }