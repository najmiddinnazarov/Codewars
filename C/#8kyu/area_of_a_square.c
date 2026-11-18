#include <math.h>

extern const double PI;

double square_area(double arc)
{
    return pow((2.0 * arc) / PI, 2) * 100.0 / 100.0;
}