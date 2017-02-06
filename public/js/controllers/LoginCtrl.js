// public/js/controllers/NerdCtrl.js
angular.module('LoginCtrl', []).controller('LoginController', function($scope, $http) {
	$http.get('/username').then(function(response){
		$scope.username = response.data;
		if($scope.username !== ""){
		document.getElementById("loginDiv").style.display="none";
		document.getElementById("siginDiv").style.display="none";
		document.getElementById("loginForm").style.display="none";
		document.getElementById("logoutForm").style.display="block";
		document.getElementById("homeDiv").style.display="block";
		document.getElementById("scheduleDiv").style.display="block";
		document.getElementById("myscheduleDiv").style.display="block";
	}else{
		document.getElementById("loginDiv").style.display="block";
		document.getElementById("siginDiv").style.display="block";
		document.getElementById("loginForm").style.display="block";
		document.getElementById("logoutForm").style.display="none";
		document.getElementById("homeDiv").style.display="none";
		document.getElementById("scheduleDiv").style.display="none";
		document.getElementById("myscheduleDiv").style.display="none";
	}
	})
	
	
});