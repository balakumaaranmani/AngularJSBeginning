var expect = chai.expect;

describe('WeatherController', function(){

	var scope, controller;

	beforeEach(function(){
		module("WeatherApp");

		inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			controller = $controller('WeatherController',{$scope: scope});
		});
	});
	
	it("Title should be set to Weather Application by default -  ", function(){
		expect(scope.title).to.equal("Weather Application");
	});
});