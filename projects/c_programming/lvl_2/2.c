// WAP to print the denominations of a currency

#include <stdio.h>

int main()
{
    int main, amount, five_hund, one_hund, fifty, twenty, ten, five, two, one;
    printf("Enter amount: ");
    scanf("%d", &amount);
    main = amount;
    five_hund = amount/500;
    amount = amount%500;
    one_hund = amount/100;
    amount = amount%100;
    fifty = amount/50;
    amount = amount%50;
    twenty = amount/20;
    amount = amount%20;
    ten = amount/10;
    amount = amount%10;
    five = amount/5;
    amount = amount%5;
    two = amount/2;
    amount = amount%2;
    one = amount;
    printf("%d = 500x%d + 100x%d + 50x%d + 20x%d + 10x%d + 5x%d + 2x%d + %d\n\a", main, five_hund, one_hund, fifty, twenty, ten, five, two, one);
}