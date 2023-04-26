//WAP to input two numbers from the keyboard and print their average

#include <stdio.h>

int main()
{
    int a, b, avg;
    printf("Enter first number: ");
    scanf("%d", &a);
    printf("Enter second number: ");
    scanf("%d", &b);
    avg = (a + b) / 2;
    printf("Their average is %d\n", avg);
}