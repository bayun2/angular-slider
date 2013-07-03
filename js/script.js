/**
 * 
 * @authors rwt (bayun2@example.org)
 * @date    2013-07-02 11:40:30
 * @version 1.0
 */

var app = angular.module("project",[])
				 .directive("slider",function($timeout){
				 	return {
				 		restrict:"E",
				 		replace:true,
				 		scope:{},
				 		templateUrl:'html/slider-template.html',
				 		link:function($scope, $element, $attrs) {
				 			data = {
				 				list:[
				 					{'imageUrl':'images/1.jpg'},
				 					{'imageUrl':'images/2.jpg'},
				 					{'imageUrl':'images/3.jpg'},
				 					{'imageUrl':'images/4.jpg'}
				 				]
				 			};
				 			$scope.list = data.list;
				 			$scope.cloneItem = data.list[0];
				 			var slider = $element,
				 				itemHeight = $attrs.sliderItemHeight,
				 				interval = $attrs.sliderInterval,
				 				length = $scope.list.length,
				 				totalHeight = itemHeight * length;
				 			$scope.i = 0;
				 			function runAuto() {
				 				if ($scope.i < totalHeight) {
									$scope.i ++;
									if ($scope.i % itemHeight == 0) {	
										$timeout(runAuto,2000);
									} else {
										$timeout(runAuto,interval);
									}				 
								} else {
									$scope.i = 0;
									$timeout(runAuto,2000);
								}
				 			}
				 			runAuto();
				 		}
				 	}
				 });