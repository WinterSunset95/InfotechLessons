// WAP to print the total number of seconds in a given time

#include <stdio.h>

int main()
{
    int hours, mins, secs, total_secs;
    printf("Enter hours: ");
    scanf("%d", &hours);
    printf("Enter minutes: ");
    scanf("%d", &mins);
    printf("Enter seconds: ");
    scanf("%d", &secs);
    total_secs = hours*60*60 + mins*60 + secs;
    printf("Total seconds is %d\n", total_secs);
}