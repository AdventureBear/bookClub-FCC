'use strict';

angular.module('bookClubApp')
  .controller('BookCtrl', function ($scope, $http, Auth, socket) {
    $scope.newBook = '';
    $scope.currentUser = Auth.getCurrentUser();
    console.log($scope.currentUser);
    $scope.awesomeBooks = [];


    $http.get('/api/books').success(function(awesomeBooks) {
      $scope.awesomeBooks = awesomeBooks;
      socket.syncUpdates('book', $scope.awesomeBooks);
      console.log($scope.awesomeBooks);
    });


    $scope.addBook = function() {
      // save the book to the database
      console.log($scope.newBook);
      if($scope.newBook === '') {
        return;
      }
      $http.post('/api/books', { name: $scope.newBook, owner: $scope.currentUser._id });
      $scope.newBook = '';

    };

    $scope.deleteBook = function(book) {
      $http.delete('/api/books/' + book._id);
    };




    $scope.message = 'Hello';
  });

