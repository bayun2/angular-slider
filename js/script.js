/**
 * 
 * @authors rwt (bayun2@example.org)
 * @date    2013-07-02 11:40:30
 * @version 1.0
 */

var sliderApp = angular.module("slider", ['sliderServices']);

sliderApp.directive("slider", function($timeout, GetSliderItem) {
 	return {
 		restrict:"E",
 		replace:true,
 		scope:{},
 		transclude: true,
 		templateUrl:'html/slider-template.html',
 		compile: function($scope, $element, $attrs) {
 			return {
 				pre: function($scope, $element, $attrs) {
 					var direction = $attrs.sliderDirection;
 					if (direction == "horizontal") {
		 				$("ul li",$element).attr("float","left");
		 			}
 				},
 				post: function($scope, $element, $attrs) {
 					GetSliderItem.query(function(data) {
		 				$scope.list = data.list;
			 			$scope.cloneItem = data.list[0];
			 			var slider = $element,
			 				itemHeight = $attrs.sliderItemHeight,
			 				itemWidth = $attrs.sliderItemWidth,
			 				interval = parseInt($attrs.sliderInterval),
			 				sleep = parseInt($attrs.sliderSleep),
			 				length = $scope.list.length+1,
			 				direction = $attrs.sliderDirection,
			 				crtItem = 0;
			 			$scope.hasNavigation = $attrs.sliderNavigation == "on" ? true : false;
			 			$scope.hasControl = $attrs.sliderControl = "on" ? true : false;
			 			function runAuto() {
			 				if (direction == "horizontal") {
			 					$("ul",$element).animate({"left":-crtItem*itemWidth},interval,function() {
			 						crtItem++;
			 						if (crtItem == length) {
			 							$("ul",$element).css("left", "0px")
			 							crtItem = 1;
			 						};	
			 						$timeout(runAuto,sleep);
			 					});
			 				} else if (direction == "vertical") {
			 					$("ul",$element).animate({"top":-crtItem*itemHeight},interval,function() {
			 						crtItem++;
			 						if (crtItem == length) {
			 							$("ul",$element).css("top", "0px")
			 							crtItem = 1;
			 						};	
			 						$timeout(runAuto,sleep);
			 					});		
			 				}	
			 			}
			 			runAuto();
			 			$scope.previousPage = function() {
			 				crtItem -= 1;
			 				runAuto()
			 			}
			 			$scope.nextPage = function() {
			 				crtItem += 1;
			 				runAuto();
			 			}
		 			});	
 				}
 			}
 		},
 		link:function($scope, $element, $attrs) {
 			
 		}
 	}
 });