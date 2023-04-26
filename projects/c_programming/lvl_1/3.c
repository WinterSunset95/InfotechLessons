//WAP to calculate the area of a circle

#include <stdio.h>

int main()
{
    int r, area;
    printf("Enter the radius of the circle: ");
    scanf("%lf", &r);
    area = r * r;
    printf("The area of the circle is %.2lf\n", area);
}