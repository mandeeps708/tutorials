//
//  main.m
//  BMITime
//
//  Created by juan.gallardo on 4/11/13.
//  Copyright (c) 2013 juan.gallardo. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import "Employee.h"

int main(int argc, char *argv[])
{
    @autoreleasepool {
        // Create an instance of Person
        Employee *person = [[Employee alloc] init];
        
        // Give the instance variables interesting values
        [person setWeightInKilos:96];
        [person setHeightInMeters:1.8];
        [person setEmployeeID:15];
        
        // Call to bodyMassIndex method
        float bmi = [person bodyMassIndex];
        NSLog(@"Employee %d has a BMI of %f", [person employeeID], bmi);

    }
    return 0;
}