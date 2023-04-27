// WAP to convert temperature from Farenheit to Centigrade. C=(F-32)*5/9

#include <stdio.h>

int main()
{
    float F, C;
    printf("Enter temperature in Farenheit: ");
    scanf("%f", &F);
    C = (F-32)*5/9;
    printf("\n%f degrees Farenheit = %f degrees Centigrade\n", F, C);
}