/***
 * Excerpted from "iOS SDK Development",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/adios for more book information.
***/
//
//  PRPRecipe.m
//  Recipes
//
//  Created by Bill Dudney on 6/29/11.
//  Copyright 2011 Gala Factory Software LLC. All rights reserved.
//
//  Modified by Juan Gallardo during training

#import "PRPRecipe.h"

@implementation PRPRecipe

//
- (id)init {
    self = [super init];
    if (self) {
      self.title = @"New Recipe";
    }
    return self;
}
//

@end
