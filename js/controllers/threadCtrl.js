(function () {
  'use strict';

    //Don't need to inject threadsService because threadRef and commentRef takes care that for us
    // !!BIG difference between this controller and "threadsCtrl" is that we are using Angular Fire **firebase$Object** instead of *Array* and so we can **$bindTo** for !!3 way binding!!

    // WHy no route params?
   app.controller('threadCtrl', function($scope, threadRef, $firebaseObject, $firebaseArray, commentRef){

     //Binding "thread" to the scope --- threadRef: using threadsService to get firebase url with specific thread id, then setting that id and next using $route and the $route.current.params.threadid to set the unique url.

     // The $firebaseObject service takes this Firebase reference and returns a JavaScript object which contains the data at the provided Firebase reference (unique url in this case) and some extra AngularFire-specific field

    var thread = $firebaseObject(threadRef);

    thread.$bindTo($scope, 'thread');

    //Created Comments Array--repeating nearly same thing as above --- however to create need to make path for it in firebase -- need to do this in threadsService with new function getComments, can't bind cuz its a firebase Array not object

    $scope.comments = $firebaseArray(commentRef);

    //Ensures that initial array data has been downloaded from the database before displaying
    $scope.comments.$loaded().then(function (comments) {
      console.log(comments);
    });


    //Creating and adding Comments with username and text passed in object which is inserted into comment array
    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });


    };


   });


}());
