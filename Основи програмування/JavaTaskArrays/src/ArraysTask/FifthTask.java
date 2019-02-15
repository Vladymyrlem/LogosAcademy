package ArraysTask;

public class FifthTask {
public static void main(String[] args){

    int[] number = {293, -2, 765, -155, 38, 16, 99, -74, 64, 89};
    int max = 0;
    int min = 0;

    for (int i = 0 ; i < number.length; i++ ) {
        if (number[i]> max)
        {
            max = number[i];
        }
        else if (number[i] <= min)
        {
            min = number[i];
        }
    }
    System.out.println("Максимальний елемент в даному масиві  " + max);


    System.out.println("Маскимальний елемент в даному масиві  " + min);

}
}
