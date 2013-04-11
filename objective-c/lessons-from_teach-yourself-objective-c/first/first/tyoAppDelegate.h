//
//  tyoAppDelegate.h
//  first
//
//  Created by Juan Gallardo on 4/9/13.
//  Copyright (c) 2013 Juan Is Awesome. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface tyoAppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong, nonatomic) NSManagedObjectContext *managedObjectContext;
@property (readonly, strong, nonatomic) NSManagedObjectModel *managedObjectModel;
@property (readonly, strong, nonatomic) NSPersistentStoreCoordinator *persistentStoreCoordinator;

- (void)saveContext;
- (NSURL *)applicationDocumentsDirectory;

@property (strong, nonatomic) UINavigationController *navigationController;

@end
