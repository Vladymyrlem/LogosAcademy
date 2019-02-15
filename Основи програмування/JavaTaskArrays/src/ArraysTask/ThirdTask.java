package ArraysTask;
import java.util.Scanner;

public class ThirdTask {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Уведіть число для перевірки: ");
        int a = sc.nextInt();

        if(a % 2 != 0){
            System.out.println("Дане число є непарним: ");
        }else{
            System.out.println("Дане число є парним: ");
        }

    }
}
