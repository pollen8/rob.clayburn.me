/**
 * @package     rob.clayburn.me
 *
 * @copyright   Copyright (C) 2014 Rob Clayburn, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

var appStates = [
     {'view': 'fabrik', url: '/fabrik', template: 'projects/fabrik.html'},
     {'view': 'podion', url: '/podion', template: 'projects/podion.html'},
     {'view': 'msge', url: '/msge', template: 'projects/msge.html'},
     {'view': 'tweeture', url: '/tweeture', template: 'projects/tweeture.html'},
     {'view': 'jed', url: '/jed', template: 'projects/jed.html'},
     {'view': 'asylum', url: '/asylum', template: 'projects/asylum.html'},
     {'view': 'liaisun', url: '/liaisun', template: 'projects/liaisun.html'},
     {'view': 'jekyll', url: '/jekyll', template: 'projects/jekyll.html'},
     {'view': 'bourjois-belle', url: '/bourjois-belle', template: 'projects/bourjois-belle.html'}
]; 


var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/projects');
	
	 $stateProvider.
	 	state('projects', {
	 		url: '/projects',
	 		templateUrl: 'partials/projects.html'
	 	})
	 	;
	 
	 angular.forEach(appStates, function (appState) {
		 $stateProvider
			.state('projects.' + appState.view, {
			      url: appState.url,
			      templateUrl: 'partials/' + appState.template
			    })
	 });
	 
	 $stateProvider.
	 	state('contact', {
	 		url: '/hello',
	 		templateUrl: 'partials/contact.html'
	 	});
	
});

myApp.run(
		  ['$rootScope', '$state', '$stateParams',
		   function ($rootScope,   $state,   $stateParams) {

     // It's very handy to add references to $state and $stateParams to the $rootScope
     // so that you can access them from any scope within your applications.For example,
     // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
     // to active whenever 'contacts.list' or one of its decendents is active.
     $rootScope.$state = $state;
     $rootScope.$stateParams = $stateParams;
     }
   ]
);

myApp.controller('contactCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.contact = {};
		$scope.error = '';
		$scope.message = '';
		// function to submit the form after all validation has occurred			
		$scope.submitForm = function (isValid) {

			$scope.error = '';
			$scope.message = '';
			
			// check to make sure the form is completely valid
			if (!isValid) {
				alert('Incomplete form');
				return;
			}
			
			$http.post('contact.php', $scope.contact)
		        .success(function(data) {
		            console.log(data);

		            if (!data.success) {
		            	// if not successful, bind errors to error variables
		                $scope.error = 'Sorry we unable to process form requests at the moment';
		            } else {
		            	// if successful, bind success message to message
		                $scope.message = 'Check! I got your email and will reply to you shortly';
		            }
		        });

		};
	}
]);
