// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {
	$scope.positions = ['Goalkeper','Defender','Midfielder','Forward'];
	$scope.times = ['12:00 - 14:00','14:00 - 16:00','16:00 - 18:00','18:00 - 20:00', '20:00 - 22:00'];
	$scope.today = new Date();
	$scope.newMatch = function(){
		$http.post('/newMatch/' + $scope.position).then(function(response){
			window.location.href = response.data;
		})
	}
});