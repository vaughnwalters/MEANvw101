'use strict'

// set the title variable to use able to be used in the index page
// hardcoded in:
// angular
//   .module('mean101', [])
//   .controller('main', function ($scope) {
//     $scope.title = 'MEAN 101 from Angular'
//   })


// if i want the title to come from a node server, set it as a variable for an $http request
// this sets up a route.  so when a request comes in to /api/title, then 
angular
  .module('mean101', [])
  .controller('main', function ($scope, $http) {
    $http
      .get('/api/title')
      .then(({ data: { title }}) =>
        $scope.title = title
      )
  })
