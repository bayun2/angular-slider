var app = angular.module('myApp', []);
var CONF = {
	fansOfBookUrl:'/angular/data/json.js'
}
/*app.run(['$timeout', '$rootScope',function($timeout, $rootScope){
	$rootScope.list = [1,2,3,4,5];
	var length = $rootScope.list.length;
	$rootScope.item = $rootScope.list[0];
    showChange($rootScope,0,5)
}])*/
/*app.run(function($rootScope, $timeout) {
	$rootScope.list = [1,2,3,4,5];
	var length = $rootScope.list.length;
	$rootScope.item = $rootScope.list[0];
    showChange($rootScope,0,5)
    
});*/
function FansList($scope,$http,$timeout) {
	$http.get(CONF.fansOfBookUrl).success(function(data) {
		$scope.list = data.list;
		var length = $scope.list.length,
			itemHeight = 110,
			totalHeight = itemHeight * length,
			interval = 15;
		$scope.cloneItem = $scope.list[0].txt;
		$scope.i = 0;
		function sliderItem() {		
			if ($scope.i < totalHeight) {
				$scope.i ++;
				if ($scope.i % itemHeight == 0) {	
					$timeout(sliderItem,2000);
				} else {
					$timeout(sliderItem,interval);
				}				 
			} else {
				$scope.i = 0;
				$timeout(sliderItem,2000);
			}
		}
		sliderItem();
		/*length = $scope.list.length;
		$scope.item = $scope.list[0].txt;
		showChange()*/
	})  
    /*function showChange(){
    	$scope.item = $scope.list[i].txt;
		if (i < length-1) {
			i++;
		} else {
			i = 0;
		}
		$timeout(showChange,1000)
	}*/
}
