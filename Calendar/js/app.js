'use strict';

/* App Module */

var app = angular.module('schedulerApp', [ ]);

app.controller('MainSchedulerCtrl', function($scope) {
  $scope.events = [
    { id:1, text:"PMT #EXAMPLE",
      start_date: new Date(2014, 7, 24),
      end_date: new Date(2014, 7, 28) },
    { id:2, text:"PMT #EXAMPLE2",
      start_date: new Date(2014, 7, 29 ),
      end_date: new Date(2013, 8, 2 ) }
  ];

  $scope.scheduler = { date : new Date(2014,8,1) };

});