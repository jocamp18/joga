angular.module('MyMatchesCtrl',[]).controller('MyMatchesController', function($scope, $http){
	$scope.positions = ['Goalkeper','Defender','Midfielder','Forward'];
	$scope.times = ['12:00 - 14:00','14:00 - 16:00','16:00 - 18:00','18:00 - 20:00', '20:00 - 22:00'];
	$scope.today = new Date();
	$http.get('/myMatches').then(function(response){
		$scope.myMatches = response.data;
	})
	
	$scope.find = function(myMatch) {
		document.getElementById("editForm").style.display="block";
		$scope.identifier = myMatch._id;
		$scope.position = myMatch.position;
		parts = myMatch.date.split("-");
		$scope.date = new Date(parts[0], parts[1] - 1, parts[2]);
		console.log($scope.date);
		$scope.time1 = myMatch.time
	}
	$scope.delete = function(id) {
		$http.post('/deleteMatch/' + id);
    	$http.get('/myMatches').then(function(response){
			$scope.myMatches = response.data;
		})
	}

})
