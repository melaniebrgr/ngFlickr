angular.module('ngFlickr', ['ngMessages'])
	.controller('formCtrl', function($rootScope, $scope, $http) {

		var url = 'https://api.flickr.com/services/rest';
		var api_key = '06cc701f07dcdba806fd64bf8b0dcf46';
		$scope.model = {
			numResults: 10
		}
		// var secret = '275c17ce4b0adad5';
		// var api_sig =  secret + 'api_key' + api_key + 'perms' + 'read';
		// api_sig = calcMD5(api_sig);

		$scope.getFlickrData = function() {
			$scope.model.message = 'Searching instagram for photos tagged with '+$scope.model.tag;
			$http({
			    url: url,
			    method: "GET",
			    params: {
						method: 'flickr.photos.search',
						tags: $scope.model.tag,
						api_key: api_key,
						format: 'json',
						//api_sig: api_sig,
						//jsoncallback:'JSON_CALLBACK',
						per_page: $scope.model.numResults
					}
			 })
			.then(function(data, status, headers, config) {
				function jsonFlickrApi(data) {
					console.log(data);
					$rootScope.data = data;
				}
				eval(data.data);
				$scope.model.message = 'We found '+$scope.model.numResults+' results for '+$scope.model.tag+'.';
				document.getElementsByName('tag')[0].value = '';
			}, function(data, status, headers, config) {
				console.log('Failure :(');
				$scope.model.message = 'We experienced an error calling the FLickr API. Sorry. :(';
			});
		};

	});