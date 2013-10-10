'use strict';
/**
angular.module('testingApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
		  'HTML5 Boilerplate',
		  'AngularJS',
		  'Karma'
		];
	});**/

angular.module('sessionsList')
	.controller('SessionsController', function($scope, $http){
		var sessionsUrl = "http://et-sessions.herokuapp.com/sessions.json";
		$scope.sessions = [];
		$scope.getData = function(){
			var httpRequest = $http({
				method: "GET",
				url: sessionsUrl,
				dataType: "json"
			}).success(function(data){
				$scope.sessions = data;
			});
		};
	});




		/**fetchSessions(sessionsUrl).done(function(data){
			$scope.sessions = data;
			console.log("all done");
			console.log($scope.sessions);
		})
		.fail(function(){
			$scope.sessions = undefined;
		});
	});

	function mockedSessions(){
		var sessionsArray = [
			{
				sprint: "2",
				focusarea: "nonon",
				date: new Date()
			},
			{
				sprint: "2",
				focusarea: "nonon",
				date: new Date()
			},
						{
				sprint: "3",
				focusarea: "nonon",
				date: new Date()
			},
		];
		return sessionsArray;
	}

	function fetchSessions(sessionsUrl){
		var deferred = $.Deferred();

		$.ajax({
			url: sessionsUrl,
			type: 'GET',
			dataType: 'json',
			success: function(data){
				deferred.resolve(data);
			},
			error: function(err){
				deferred.reject(err);
			}
		});
		return deferred.promise();
	}**/
