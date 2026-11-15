#include <stdio.h>
#include <stdbool.h>

bool lovefunc(int flower1, int flower2)
{
    return (flower1 + flower2) % 2 == 1;
}

int main()
{
    printf("%d", lovefunc(1, 4));
    return 0;
}