#include <stdio.h>

const char *bmi(int weight, double height)
{
    double bmi = weight / (height * height);
    if (bmi <= 18.5)
    {
        return "Underweight";
    }
    else if (bmi <= 25.0)
    {

        return "Normal";
    }
    else if (bmi <= 30.0)
    {
        return "Overweight";
    }
    return "Obese";
}

int main()
{
    printf("%s", bmi(50, 1.80));
    return 0;
}