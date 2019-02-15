package com.quadraticequation;

import java.util.Scanner;

public class QuadraticEquation {
    public static void main(String[] args) {
        int a, b, c;//коренні рівняння
        int D;//дискрімнант
        System.out.println("Программа вирішує рівняння типу:");
        System.out.println("ax^2 + bx + c = 0");
        System.out.println("Введіть будь-ласка значення a, b та c:");
        Scanner in = new Scanner(System.in);
        a = in.nextInt();
        b = in.nextInt();
        c = in.nextInt();
        D = b * b - 4 * a * c;
        if (D > 0) {
            int x1, x2;
            x1 = (int) ((-b - Math.sqrt(D)) / (2 * a));
            x2 = (int) ((-b + Math.sqrt(D)) / (2 * a));
            System.out.println("Корені рівняння: x1 = " + x1 + ", x2 = " + x2);
        }
        else if (D == 0) {
            int x;
            x = -b / (2 * a);
            System.out.println("Рівняння має один дійсний корень: x = " + x);
        }
        else {
            System.out.println("Рівняння не має дійсних коренів!");
        }
    }
}
