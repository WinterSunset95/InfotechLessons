//WAP to calculate the area of a circle

#include <stdio.h>

int main()
{
    float r, area;
    printf("Enter the radius of the circle: ");
    scanf("%f", &r);
    area = r * r * 3.14;
    printf("The area of the circle is %.2f\n", area);
}