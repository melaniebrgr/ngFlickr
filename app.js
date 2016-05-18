angular.module('ngFlickr', ['ngMessages'])
	.controller('formCtrl', function($scope, $http) {
// Key: 06cc701f07dcdba806fd64bf8b0dcf46
// Secret: 275c17ce4b0adad5

		var url = 'https://api.flickr.com/services/rest';
		var secret = '275c17ce4b0adad5';
		var api_key = '06cc701f07dcdba806fd64bf8b0dcf46';
		var api_sig =  secret + 'api_key' + api_key + 'perms' + 'read';
		api_sig = calcMD5(api_sig);


		$scope.getFlickrData = function() {

//https://www.flickr.com/services/api/flickr.photos.search.html
			$http({
			    url: url,
			    method: "GET",
			    params: {
						method: 'flickr.photos.search',
						tags: 'cat',
						api_key: api_key,
						format: 'json',
						//api_sig: api_sig,
						jsoncallback:'JSON_CALLBACK'
					}
			 })
			.then(function(data, status, headers, config) {
				console.log(data);
			}, function(data, status, headers, config) {
				console.log('Failure :(');
			});
		};

		console.log(url+'?api_key='+api_key+'&api_sig='+api_sig);

	});
