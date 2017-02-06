// public/js/controllers/NerdCtrl.js
angular.module('MatchCtrl', []).controller('MatchController', function($scope, $http) {
    $http.get('/api/matches').then(function(response){
    	$scope.matches = response.data;
    })
    
});