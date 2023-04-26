//WAP to input two numbers from the keyboard and print their sum

#include <stdio.h>

int main()
{
    // Initialize variables
    int a, b, sum;
    printf("Enter first number: ");
    scanf("%d", &a);
    printf("Enter second number: ");
    scanf("%d", &b);
    sum = a + b;
    printf("Their sum is %d\n", sum);
}