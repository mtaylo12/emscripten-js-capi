#include <stdio.h>
#include <emscripten.h>
extern "C"
{
    extern void printey();
    extern int calcey(int x, int y);
}

int main()
{
    printey();
    printf("*%d*\n", calcey(10, 22));

    return 0;
}