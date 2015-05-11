// JavaScript Document
angular.module('myApp', [])
	.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.submitted=false;
		$scope.searchInstagram = function(tagName) {
			
			if(tagName){	
				$scope.notReset = true;
			  	$scope.tag = tagName;
			  	$scope.tagShow = tagName;
			  	$scope.submitted = true;

				var url = "https://api.instagram.com/v1/tags/"+ $scope.tag +"/media/recent";
				var request = {
					  COUNT:20,
					  callback: 'JSON_CALLBACK',
		              client_id: '09219150321b492682d782b320c4b3ab'
				  };

				$http({
					  method: 'JSONP',
					  url: url,
					  params: request
				})
				.success(function(response){
					  $scope.results = response.data;
					  $scope.tagName="";	  
				})
				.error(function() {
					  alert('error');
					  $scope.tagName="";
			    });
			}
	    };

	    $scope.reset = function() {
			  	$scope.notReset = false;
			  	$scope.results="";
			  	$scope.submitted=false;
	    };

}]);