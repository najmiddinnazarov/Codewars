
#include <stdio.h>
#include <string.h>
#include <ctype.h>

char *makeUpperCase(char *string)
{
    int length = strlen(string);
    for (int i = 0; i < length; i++)
    {
        string[i] = toupper((unsigned char)string[i]);
    }
    return string;
}
int main()
{
    char string[] = "hey";
    makeUpperCase(string);
    printf("%s\n", string);
    return 0;
}
