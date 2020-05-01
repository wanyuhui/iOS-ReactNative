//
//  ViewController.m
//  RNApp
//
//  Created by wanyuhui on 2020/4/29.
//  Copyright © 2020 wanyuhui. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    RCTRootView *rctView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                    moduleName:@"RNPage"
                                             initialProperties:@{@"name":@"我是小明"}
                                                 launchOptions:nil];
    self.view = rctView;
}

@end
