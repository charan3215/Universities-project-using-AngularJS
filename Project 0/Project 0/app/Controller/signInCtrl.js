app.controller('signInCtrl',["$scope","$location","signInService",function($scope,$location,signInService){
   var person={};

    $scope.signIn=function() {
        
        person.email=$scope.umail,
        person.pass=$scope.upass,

        console.log(person);

        $scope.decide = false
        signInService.getData(function (data) {
            console.log("got data");
         $scope.p=data.forEach((element,index) => {

            if(person.email===element.email && person.pass===element.pass){
                $scope.decide=true;
                
                
            }        
            });

            if($scope.decide)
            {
                alert("Login successful")
                $location.path("/Home");
            }
            else
            {
                alert("wrong Email or password");
            }

        }); 

        
         
    }   

    
    $scope.redirectToregister=function () {
        console.log("link clicked");

        $location.path("/register");
        
    }

    
}])