/**
 * @package     rob.clayburn.me
 *
 * @copyright   Copyright (C) 2014 Rob Clayburn, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

angular.module('HashBangURLs', []).config(['$locationProvider', function($location) {
  $location
  .html5Mode(false)
  .hashPrefix('!');
}]);

var appStates = [
     {'view': 'fabrik', url: '/fabrik', template: 'projects/fabrik.html', 'thumb': 'fabrik-logo.png', 'title': 'Fabrik'},
     {'view': 'podion', url: '/podion', template: 'projects/podion.html', 'thumb': 'podion.gif', 'title': 'Podion'},
     {'view': 'msge', url: '/msge', template: 'projects/msge.html', 'thumb': 'msge.png', 'title': 'MSGE'},
     {'view': 'tweeture', url: '/tweeture', template: 'projects/tweeture.html', 'thumb': 'tweeture.jpg', 'title': 'Tweeture'},
     {'view': 'jed', url: '/jed', template: 'projects/jed.html', 'thumb': 'jed.png', 'title': 'Joomla Extension Directory'},
     {'view': 'asylum', url: '/asylum', template: 'projects/asylum.html', 'thumb': '28hourslater.png', 'title': '2.8 Hours Later'},
     {'view': 'liaisun', url: '/liaisun', template: 'projects/liaisun.html', 'thumb': 'liaisun.png', 'title': 'Liaisun'},
     {'view': 'jekyll', url: '/jekyll', template: 'projects/jekyll.html', 'thumb': 'Jekyll_and_HydeS_Shot.jpg', 'title': 'Jekyll and Hyde'},
     {'view': 'bourjois-belle', url: '/bourjois-belle', template: 'projects/bourjois-belle.html', 'thumb': 'belle.jpg', 'title': 'Bourjois Belle'},
     {'view': 'epics', url: '/epics', template: 'projects/epics.html', 'thumb': 'epics.gif', 'title': 'EPICS'}
]; 


var myApp = angular.module('myApp', ['ui.router', 'ngAnimate', 'angulartics', 'angulartics.google.analytics', 'HashBangURLs']);

myApp.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/projects/fabrik');
	
	 $stateProvider.
	 	state('projects', {
	 		url: '/projects',
	 		templateUrl: 'partials/projects.html',
		      controller: function ($scope) {
		    	  $scope.status = 'ready';
		    	  $scope.projects = appStates;
		      }
	 	})
	 	;
	 
	 angular.forEach(appStates, function (appState) {
		 $stateProvider
			.state('projects.' + appState.view, {
			      url: appState.url,
			      templateUrl: 'partials/' + appState.template,
			      controller: function ($scope) {
			    	  console.log('ready!');
			    	  $scope.status = 'ready';
			      }
			    })
	 });
	 
	 $stateProvider.
	 	state('contact', {
	 		url: '/hello',
	 		templateUrl: 'partials/contact.html',
		      controller: function ($scope) {
		    	  $scope.status = 'ready';
		      }
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

myApp.controller('dropMenuCtrl', ['$scope', '$state', function ($scope, $state) {
	
	$scope.update = function (item) {
		$state.go('projects.' + item.view);
	}
}]);

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
