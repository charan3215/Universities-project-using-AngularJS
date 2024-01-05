app.controller("registerCtrl",["$scope","registerService","$location", function ($scope,registerService,$location) {
    console.log("I am inside the registerCtrl");
    var userObj = {};

    $scope.postData = function () {

        userObj.name = $scope.username;
        userObj.email = $scope.usermail;
        userObj.pass = $scope.userpass;


        console.log(userObj);
        registerService.sendData(userObj);
        $location.path("/");




    }
}


])  