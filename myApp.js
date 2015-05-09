// JavaScript Document
angular.module('myApp', [])
	.config(function($httpProvider) {
		$httpProvider.defaults.useXDomain = true;
	})
	.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.searchInstagram = function(tagName) {
			if(tagName){	
			  	$scope.tag = tagName;

				var url = "https://api.instagram.com/v1/tags/{tag}/media/recent";
				var request = {
					  COUNT:20,
					  callback: 'JSON_CALLBACK',
		              client_id: '09219150321b492682d782b320c4b3ab'
				  };

				$http({
					  method: 'GET',
					  url: url,
					  params: request
				})
				.success(function(response) {
					  $scope.results = response.data;
					  $scope.tag = '';
				})
				.error(function() {
					  alert('error');
					  $scope.tag = '';
			    });
			}
	    };

}]);