// Print the range of a number

#include <stdio.h>

int main()
{
    int n, lower, upper;
    printf("Enter a number: ");
    scanf("%d", &n);
    lower = n/10 * 10;
    upper = lower + 10;
    printf("%d is between %d and %d\n", n, lower, upper);
}