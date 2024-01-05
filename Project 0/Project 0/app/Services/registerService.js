app.service("registerService",["$http",function($http){


    this.sendData=function(userObj) {
        console.log("I am inside sendData method");
        
        $http({
            method: 'POST',
            url: 'http://localhost:3000/users',
            data: userObj
        })
        .then(function(response){
            console.log(response.data);
            alert("signup successful");

        },function (error) {
            console.log(error);
            
        })
        
    }
}])