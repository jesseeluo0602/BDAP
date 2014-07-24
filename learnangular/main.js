var myApp = angular.module('myApp', []);

myApp.directive("enter", function(){
	return function (scope, element, attrs){
		element.bind("mouseenter", function(){
			element.addClass(attrs.enter);
		})
	}
})

myApp.directive("leave", function(){
	return function (scope, element, attrs){
		element.bind("mouseleave", function(){
			element.removeClass(attrs.enter);
		})
	}
})

myApp.directive("click", function() {
    return function(scope, element, attrs) {
        element.bind("click", function() {
            alert("Wow such click");
        })
    }
})

myApp.factory('Data',function(){
	return {message: "Wrap me like your french ladies"}
})

myApp.filter('reverse', function(){
	return function(text){
		return "This is the reverse :  " + text.split("").reverse().join("");
	}
})


function FirstCtrl($scope, Data){
	$scope.data= Data;
}

function SecondCtrl($scope, Data){
	$scope.data = Data;
}

