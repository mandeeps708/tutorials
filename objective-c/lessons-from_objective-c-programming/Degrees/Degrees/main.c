//
//  main.c
//  Degrees
//
//  Created by juan.gallardo on 4/11/13.
//  Copyright (c) 2013 juan.gallardo. All rights reserved.
//

#include <stdio.h>
#include <stdlib.h>

// Declare a global variable
float lastTemperature;

float farenheitFromCelsius(float cel)
{
    lastTemperature = cel;
    float fahr = cel * 1.8 + 32.0;
    printf("%f Celsius is %f Farenheit\n, cel, fahr");
    return fahr;
}

int main(int argc, const char * argv[])
{
    float freezeInC = 0;
    float freezeInF = farenheitFromCelsius(freezeInC);
    printf("Water freezes at %f degrees Farenheit\n", freezeInF);
    printf("The last temperature converted was %f\n", lastTemperature);
    return EXIT_SUCCESS;
}

