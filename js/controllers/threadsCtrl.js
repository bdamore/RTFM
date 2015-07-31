(function () {
  'use strict';

   app.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray){

    // threadsRef is the result of calling getThreads which just returns us new Firebase('THE FIREBASE URL' + /thread) and $firebaseArray just makes it so it gives our data back to us as an Array.
    $scope.threads = $firebaseArray(threadsRef);

    //Ensures that initial array data has been downloaded from the database before displaying
    $scope.threads.$loaded().then(function (threads) {
      console.log(threads);
    });

    // Use the AngularFire "array"  **$add** function to add the new thread to the threads array.
    // we are adding object (thread) to "threads" array that is taking username and new title
     $scope.createThread = function(username, newThreadTitle) {
       $scope.threads.$add({
         username: username,
         title: newThreadTitle
       });

     };

   });


}());
