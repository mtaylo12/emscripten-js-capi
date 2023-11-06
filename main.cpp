#include <stdio.h>
extern "C"
{
    extern void printey();
}

int main()
{
    printey();
    return 0;
}