#include <stdio.h>
#include <stdbool.h>

const char *bool_to_word(bool value)
{
    return value == true ? "Yes" : "No";
}

int main()
{

    printf("%s", bool_to_word(true));
    return 0;
}