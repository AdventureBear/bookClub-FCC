'use strict';

angular.module('bookClubApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.awesomeBooks = [];
    $http.get('/api/books').success(function(awesomeBooks) {
      $scope.awesomeBooks = awesomeBooks;
      socket.syncUpdates('book', $scope.awesomeBooks);
      console.log($scope.awesomeBooks);
    });

    $scope.deleteBook = function(book) {
      $http.delete('/api/books/' + book._id);
    };
    //console.log(awesomeBooks);



  });
