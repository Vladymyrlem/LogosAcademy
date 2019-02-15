package javatask.strings.functions;

import java.time.format.DateTimeFormatter;
import java.util.Scanner;
import java.time.LocalTime;
public class PlanningDay {
public static void main(String[] args) {

getActions(dayValue(), actionValue());

}
private static String dayValue(){
    String day;
    Scanner in = new Scanner(System.in);
    System.out.println("Введіть день: ");
    day = in.nextLine();
    return day;
}
private static String actionValue(){
    String time;
    Scanner in = new Scanner(System.in);
    System.out.print("Введіть час: ");
    time = in.nextLine();
    return time;
}
//public static void printPlans(String action,String time){
//    DateTimeFormatter formatter;
//    String stime = null;
////    String action = null;
//    if (stime != null) {
//        formatter = DateTimeFormatter.ofPattern("H:m:s");
//        LocalTime dateTime = LocalTime.parse(stime, formatter);
//        System.out.println(dateTime.getHour());
//        System.out.println(dateTime.getMinute());
//    }
////    printPlans(actionValue(), dayValue());
//    getActions(dayValue(), actionValue());
//}
private static void getActions(String day, String time){
    LocalTime time1 = LocalTime.of(10, 00);
    LocalTime time2 = LocalTime.of(12, 00);
    LocalTime time3 = LocalTime.of(13, 30);
    LocalTime time4 = LocalTime.of(16, 00);
    switch (day) {
        case "Mon":
            switch (time){
                case "10:00":
                    System.out.println("Здати звіт за минулу неділю");
                    break;
                case "11:00":
                    System.out.println("Скласти плани на неділю");
                    break;
                default:
                    System.out.println("Відпочинок");
            }
            break;
        case "Tue":
            switch (time){
                case "12:00":
//                    printPlans("Нарада о ", "12:00");
//                    System.out.println();
                    System.out.println("Нарада о " + time2);
                    break;
                case "14:00":
                    System.out.println("Колективна нарада");
                    break;
                default:
                    System.out.println("Робочі справи");
            }
            break;
        case "Wed":
            System.out.println("Відправка у відрядження! Треба підготуватись");
            break;
        case "Thu":
            System.out.println("Отже відрядження! Виліт о"  + time3); ;
            break;
        case "Fri":
            System.out.println("Нарешті закінчується ця важка неділя. До "  +  time4  + " треба занести документи с недільними підсумками та докладом з відрядження");
            break;
        case "Sat":
            System.out.println("Нарешті субота! Сил вже немає. Треба відірватись на повну ");
            break;
        case "Sun":
            System.out.println("О ні! Вихідні так швидко пройшли, а завтра знов на роботу");
            break;
        default:
            System.out.println("Не вірно введено день");
    }
}
}