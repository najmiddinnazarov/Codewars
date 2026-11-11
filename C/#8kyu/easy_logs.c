#include <stdio.h>
#include <math.h>

double easy_logs(double x, double a, double b)
{
    return log(a * b) / log(x);
}

int main()
{
    printf("%lf", easy_logs(10.0, 2.0, 3.0));
    return 0;
}