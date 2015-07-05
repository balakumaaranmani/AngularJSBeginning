angular.module('WeatherApp',[])
.controller('WeatherController', function($scope, WeatherService){
	$scope.title = "Weather Application";	
	$scope.city = WeatherService.getCurrentLocation();
	$scope.cityList = WeatherService.getCityList();	

	$scope.changeCity = function(){
		WeatherService.getCityWeather($scope.city).then( function(data){
			$scope.currentCityWeather =  data;
		});
	}
})
.directive('weatherWidget', [function($scope){
	return {
		templateUrl: './html/weather-widget.html',
		restrict: 'ECMA',
		replace: true
	};
}])
.factory('WeatherFacory', function($http, $q){
	var weatherFactory =  {};

	weatherFactory.getCityWeather = function(city){
		var url = "http://api.openweathermap.org/data/2.5/weather";
		var cityUrl = url + "?q="+city+",IN";
		var defer = $q.defer();
		$http.get(cityUrl)
			.success(function(data){
			
				defer.resolve(data);
			})
		return defer.promise;
	
	}
	return weatherFactory;
})
.service('WeatherService', function(WeatherFacory){
	this.getCityList = function(){
		return ["Chennai", "Coimbatore","Madurai","Trichy","Salem"];
	}
	
	this.getCityWeather = function(city){
		return WeatherFacory.getCityWeather(city);
	}
	
	this.getCurrentLocation = function () {
		return "Chennai";
	}

})
