myApp.controller('menuCtrl', ['$scope', function ($scope) {
	
	var fadeOutTo = 0.7,
	fadeInTo = 1,
	fadeOutWidth = 50;
	fadeOutHeight = 50;
	fadeInWidth = 100,
	fadeInHeight = 100;
	fadeInLeftOffset = '-22px';
	
	$scope.enter = function ($event) {
		
		if ($scope.active !== undefined) {
			$($scope.active).animate({
				'width': fadeOutWidth + 'px',
				'height': fadeOutHeight + 'px',
				'margin-top': (fadeOutHeight / 2) + 'px',
				'margin-left': 0
			}).removeClass('active animated rubberBand');
			
			$($scope.active).fadeTo('slow', fadeOutTo);
		}
		
		$scope.active = $($event.currentTarget);
		
//		/$scope.active.fadeTo('fast', fadeInTo);
		$scope.active.animate({
			'width': fadeInWidth + 'px',
			'height': fadeInHeight + 'px',
			'margin-top': 0,
			'margin-left': fadeInLeftOffset
		}, 'fast', function () {
			$(this).removeClass('animated rubberBand').addClass('animated rubberBand');
			$scope.active.fadeTo('fast', fadeInTo);
		});
		
	};
}]);

