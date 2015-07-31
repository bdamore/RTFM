var app = angular.module("rtfmApp",['ngRoute','firebase']);

(function () {
  'use strict';

  //Setting constant url to be used by all files, use above app.config
  app.constant('fb', {
    url: 'fire-base-exampleapp.firebaseIO.com'
  });

  // Why no $routeParams?
  app.config(function($routeProvider) {
    $routeProvider.
      when('/threads', {
        templateUrl: '/templates/threads.html',
        controller: 'threadsCtrl',
        // since we're using resolve, threadsRef will be available in our controller if we inject it in and its value will be the data which is coming from our getThreads() method.
        resolve: {
          threadsRef: function(threadsService) {
            return threadsService.getThreads();
          }
        }
      })
      .when('/threads/:threadId', {
        templateUrl: '/templates/thread.html',
        controller: 'threadCtrl',
        resolve: {
          threadRef: function(threadsService, $route) {
            //Using route.current.params.threadId to go to specific unique thread/comments page
            return threadsService.getThread($route.current.params.threadId);
          },
          commentRef: function(threadsService, $route) {
            return threadsService.getComments($route.current.params.threadId);
          }
        }

      })
      .otherwise({
      redirectTo: '/threads'
      });




  //Creating reference that can be manipulated
  var firebaseRef = new Firebase("fire-base-exampleapp.firebaseIO.com");


  });

}());
