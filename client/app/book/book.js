'use strict';

angular.module('bookClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('book', {
        url: '/books',
        templateUrl: 'app/book/book.html',
        controller: 'BookCtrl',
        authenticate: true
      });
  });
