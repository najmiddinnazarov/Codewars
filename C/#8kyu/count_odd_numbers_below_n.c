#include <stdio.h>
#include <math.h>

long long odd_count(long long n)
{
    return floor(n / 2);
}

int main()
{
    printf("%d", odd_count(7));
    return 0;
}