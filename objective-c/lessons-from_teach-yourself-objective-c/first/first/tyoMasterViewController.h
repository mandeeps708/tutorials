//
//  tyoMasterViewController.h
//  first
//
//  Created by Juan Gallardo on 4/9/13.
//  Copyright (c) 2013 Juan Is Awesome. All rights reserved.
//

#import <UIKit/UIKit.h>

@class tyoDetailViewController;

#import <CoreData/CoreData.h>

@interface tyoMasterViewController : UITableViewController <NSFetchedResultsControllerDelegate>

@property (strong, nonatomic) tyoDetailViewController *detailViewController;

@property (strong, nonatomic) NSFetchedResultsController *fetchedResultsController;
@property (strong, nonatomic) NSManagedObjectContext *managedObjectContext;

@end
