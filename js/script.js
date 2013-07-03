/**
 * 
 * @authors rwt (bayun2@example.org)
 * @date    2013-07-02 11:40:30
 * @version 1.0
 */

var app = angular.module("project",[])
				 .directive("slider",function($timeout,$http){
				 	return {
				 		restrict:"E",
				 		replace:true,
				 		scope:{},
				 		templateUrl:'html/slider-template.html',
				 		link:function($scope, $element, $attrs) {
				 			$http.get('data/json.js').success(function(data) {
				 				$scope.list = data.list;
					 			$scope.cloneItem = data.list[0];
					 			var slider = $element,
					 				itemHeight = $attrs.sliderItemHeight,
					 				interval = parseInt($attrs.sliderInterval),
					 				sleep = parseInt($attrs.sliderSleep),
					 				length = $scope.list.length,
					 				totalHeight = itemHeight * length,
					 				crtItem = 0;
					 			function runAuto() {
					 				$("ul",$element).animate({"top":-crtItem*itemHeight},interval,function() {
					 					if (crtItem < length) {
					 						crtItem++;
					 					} else {
					 						crtItem = 0;
					 						$(this).css("top","0px");
					 					}
					 					$timeout(runAuto,sleep);
					 				})
					 			}
					 			runAuto();
				 			});	
				 		}
				 	}
				 });