#include <stdio.h>

int makeNegative(int num)
{
    if (num == 0)
    {
        return 0;
    }
    else if (num > 0)
    {
        return num * -1;
    }
    else
    {
        return num;
    }
}

int main()
{
    printf("%d", makeNegative(-2));
    return 0;
}