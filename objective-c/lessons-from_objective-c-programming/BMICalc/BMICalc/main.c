//
//  main.c
//  BMICalc
//
//  Created by juan.gallardo on 4/11/13.
//  Copyright (c) 2013 juan.gallardo. All rights reserved.
//

#include <stdio.h>

// Here is the declaration of the type person
typedef struct _person {
    float heightInMeters;
    int weightInKilos;
} Person;

float bodyMassIndex(Person p)
{
    return p.weightInKilos / (p.heightInMeters * p.heightInMeters);
}

int main(int argc, const char * argv[])
{
    Person person;
    person.weightInKilos = 96;
    person.heightInMeters = 1.8;
    float bmi = bodyMassIndex(person);
    printf("person has a BMI of %.2f\n", bmi);
    return 0;
}

