angular.module('ngFlickr', ['ngMessages'])
	.controller('formCtrl', function($scope, $http) {
// Key: 06cc701f07dcdba806fd64bf8b0dcf46
// Secret: 275c17ce4b0adad5
		
		var url = 'https://api.flickr.com/services/rest';
		var secret = '275c17ce4b0adad5';
		var api_key = '06cc701f07dcdba806fd64bf8b0dcf46';
		var api_sig =  secret + 'api_key' + api_key + 'perms' + 'read';
		api_sig = calcMD5(api_sig);
		// alert(calcMD5('hi'));
		// alert('hi');

		$scope.getFlickrData = function() {
			var request = {
				method: 'flickr.photos.search',
				url: url,
				tags: 'cat',
				api_key: api_key, 
				format: 'jsonp',
				api_sig: api_sig
			};

			console.log(request);

			$http(request)
			.then(function(data, status, headers, config) {
				console.log(data);
			}, function(data, status, headers, config) {
				console.log('Failure :(');
			});		
		};

		console.log(url+'?api_key='+api_key+'&api_sig='+api_sig);
		
		// var testUrl = 'https://api.flickr.com/services/rest/?method=flickr.test.echo&name=value'
		// var request = {
		// 	// method: 'rest',
		// 	method: 'flickr.test.echo',
		// 	api_key: '06cc701f07dcdba806fd64bf8b0dcf46',
		// 	format: 'json'
		// 	// tag: $scope.data.tag,
		// }
		

		// $scope.getFlickrData = function() {
		// 	$http({
		// 		url: url,
		// 		method: 'flickr.test.echo',
		// 		api_key: '06cc701f07dcdba806fd64bf8b0dcf46'
		// 	})
		// 	.then(function(data, status, headers, config) {
		// 		console.log(data);
		// 	}, function(data, status, headers, config) {
		// 		console.log('Failure :(');
		// 	});			
		// };

	});