/***
 * Excerpted from "iOS SDK Development",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/adios for more book information.
***/
//
//  PRPViewController.h
//  Recipes
//
//  Created by Bill Dudney on 9/14/12.
//  Copyright (c) 2012 Pragmatic Programmers LLC. All rights reserved.
//

#import <UIKit/UIKit.h>

//
#import "PRPRecipe.h"
//

@interface PRPViewController : UIViewController

//
@property(nonatomic, strong) IBOutlet UILabel *recipeTitle;
//

//
@property(nonatomic, strong) PRPRecipe *recipe;
//

@end
