//
//  tyoDetailViewController.h
//  first
//
//  Created by Juan Gallardo on 4/9/13.
//  Copyright (c) 2013 Juan Is Awesome. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface tyoDetailViewController : UIViewController

@property (strong, nonatomic) id detailItem;

@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;
@end
