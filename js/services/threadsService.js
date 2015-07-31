// Make sure to pass in **fb** so it has access
app.service('threadsService', function(fb) {


  //Creating new spots where data is saved
  this.getThread = function(threadId) {
    return new Firebase(fb.url + '/threads/' + threadId);
  };

  this.getThreads = function() {
    return new Firebase(fb.url + '/threads');
  };

  this.getComments = function(threadId) {
     return new Firebase(fb.url + '/threads/' + threadId + '/comments');
   };



});
