/***
 * Excerpted from "iOS SDK Development",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/adios for more book information.
***/
//
//  PRPViewController.m
//  Recipes
//
//  Created by Bill Dudney on 9/14/12.
//  Copyright (c) 2012 Pragmatic Programmers LLC. All rights reserved.
//
//  Modified by Juan Gallardo during training

#import "PRPViewController.h"

@interface PRPViewController ()

@end

@implementation PRPViewController

//
- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  self.recipeTitle.text = self.recipe.title;
}
//

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
