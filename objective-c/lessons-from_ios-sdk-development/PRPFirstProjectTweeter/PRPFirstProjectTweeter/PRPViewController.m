//
//  PRPViewController.m
//  PRPFirstProjectTweeter
//
//  Created by Juan Gallardo on 4/6/13.
//  Copyright (c) 2013 Juan Is Awesome. All rights reserved.
//

#import "PRPViewController.h"
#import <Social/Social.h>

@interface PRPViewController : UIViewController ()
- (void) reloadTweets {
    NSURL *twitterAPIURL = [NSURL URLWithString:
                            @"http://api.twitter.com/1/statuses/user_timeline.json"];
    NSDictionary *twitterParams = @ {
        @"Screen_name" : @"JGallardo2600",
    };
    SLRequest *request = [SLRequest requestForServiceType:SLServiceTypeTwitter
                                            requestMethod:SLRequestMethodGET
                                                      URL:twitterAPIURL
                                               parameters:twitterParams];
    [request performREquestWithHandler:^(NSData *responseData,
                                         NSHTTPURLREsponse *URLResponse,
                                         NSError *error) {
        [self handleTwitterData:responseData
                    urlResponse:urlResponse
                          error:error];
    }];
}
- (void) handleTwitterData: (NSData*) data
               urlResponse: (NSHTTPURLResponse*) urlResponse
                     error: (NSError*) error {
    NSError *jsonError = nil;
    NSJSONSerialization * jsonResponse =
    [NSJSONSerialization JSONObjectWithData:data
                                    options:0
                                      error:&jsonError];
    NSLog (@"jsonResponse: %@", jsonResponse);
    if (!jsonError &&
        [jsonResponse isKindOfClass:[NSArray class]]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            NSArray *tweets = (NSArray*) jsonResponse:
            NSSortDescriptor *sortByText =
            [NSSortDescriptor sortDescriptorWithKey:@"text" ascending:YES];
            NSArray *sortDescriptors = @[sortByText];
            tweets = [tweets sortedArrayUsingDescriptors:[sortDescriptors];
            for (NSDictionary * tweetDict in tweets) {
                NSString *tweetText =
                [NSString stringWithFormat:@"%@ (%@)",
                 [tweetDict valueForKey:@"text"],
                 [tweetDict valueForKey:@"created_at"]];
                self.twitterTextView.text = [NSString stringWithFormat:@"%@%@\n\n",
                                             self.twitterTextView.text,
                                             tweetText];
            }
        });
    }
}
@property (nonatomic, strong) IBOutlet UITextView *TwitterTextView;
@end

// @implementation PRPViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (IBAction) handleTweetButtonTapped:(id) sender {
    if ([SLComposeViewController isAvailableForServiceType: SLServiceTypeTwitter]) {
        SLComposeViewController *tweetVC =
        [SLComposeViewController composeViewControllerForServiceType:
         SLServiceTypeTwitter];
        [tweetVC setInitialText: NSLocalizedString(
            @"I just finished a project in iOS SDK Development. #pragsios",
            nil)];
        tweetVC.completionHandler = ^(SLComposeViewControllerResult result) {
            if (result == SLComposeViewControllerResult Done) {
                [self.dismissViewControllerAnimated:YES completion:NULL];
                [self reloadTweets];
        }
    };
    [self presentViewController:tweetVC animated:YES completion:NULL];
}
}


- (IBAction) handleShowMyTweetsTapped:(id)sender {
    [self.twitterWebView loadRequest:
     [NSURLRequest requestWithURL:
      [NSURL URLWithString:@"http://www.twitter.com/JGallardo2600"]]];
}


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
