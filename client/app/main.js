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
// to use angular-routes, inject it into the module to make available to all the controllers
// need a controller here, but also need a config to handle configuration ($routeProvider)
// so! when at the root, go to the main controller and use a template for the partial to be shown

angular
  .module('mean101', ['ngRoute'])
  .config($routeProvider =>
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/main.html',
      })
      .when('/chat', {
        controller: 'ChatCtrl',
        templateUrl: 'partials/chat.html',
      })
  )
  .controller('MainCtrl', function ($scope, $http) {
    $http
      .get('/api/title')
      .then(({ data: { title }}) =>
        $scope.title = title
      )
  })

  // HARDCORE THE JAVASCRIPT FIRST, and THEN set up a route in the server and replace
  // hardcoding with server api call
  // .controller('ChatCtrl', function ($scope) {
  //   $scope.messages = [
  //     {
  //       author: 'John',
  //       content: 'YO SUP',
  //     },
  //     {
  //       author: 'Anonymous',
  //       content: 'SUP COHORT 14',
  //     }]

  // })

// NOW CAN GRAB THE MESSAGES FROM THE API ROUTE IN THE SERVER
  .controller('ChatCtrl', function ($scope, $http) {
    $scope.sendMessage = () => {
      const msg = {
        author: $scope.author,
        content: $scope.content,
      }

      $http
        .post('/api/messages', msg)
        .then(() => $scope.messages.push(msg))
        .catch(console.error)
    }

    $http
      .get('/api/messages')
      .then(({ data: { messages }}) =>
        $scope.messages = messages
      )
  })
