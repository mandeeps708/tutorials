//
//  UsingViews2ViewController.m
//  UsingViews2
//
//  Created by Juan Gallardo on 1/15/13.
//  Copyright (c) 2013 __MyCompanyName__. All rights reserved.
//

#import "UsingViews2ViewController.h"

@interface UsingViews2ViewController ()

@end

@implementation UsingViews2ViewController

@synthesize webView;

- (void)viewDidLoad
{
	NSURL *url = [NSURL URLWithString:@"http://boards.4chan.org/b/"];
	NSURLRequest *req = [NSURLRequest requestWithURL:url];
	[webView loadRequest:req];
    [super viewDidLoad];
}

- (void)dealloc {
	[webView release];
	[super dealloc];
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
	return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

@end
