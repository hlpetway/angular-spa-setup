// public/js/services/GeekService.js
angular.module('GeekService', []).factory('Geek', ['$http', function($http) {

  return {
    // call to get all nerds
    get : function() {
      return $http.get('/api/geeks');
    },

    // call to POST and create a new geek
    create : function(geekData) {
      return $http.post('/api/geeks', geekData);
    },

    // call to DELETE a geek
    delete : function(id) {
      return $http.delete('/api/geeks/' + id);
    }
  }

}]);


// Those are just placeholders and they won’t work unless you define those specific
// routes in your app/routes.js file. These services will call our Node backend,
// retrieve data in JSON format, and then we can use it in our Angular controllers.
