package ArraysTask;
import java.util.Scanner;
import java.lang.Math;
public class FourthTask {
    public static void main(String[] args) {
        int c = 10;
        double m = 8.5;
        double n = 11.45;
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Уведіть перше число: ");
//        double m = sc.nextDouble();
//        System.out.println("Уведіть друге число: ");
//        double n = sc.nextDouble();
        double a = Math.abs(c-n);
        double b = Math.abs(c-m);

        if(a>b){
            System.out.println("Число "+m+" ближче до "+c);
        }
        if (a<b) {
            System.out.println("Число "+n+" ближче до "+c);
        }
    }
    }
