app.service("signInService",["$http",function($http){

    this.getData=function(fn) {
        console.log("I am inside getData method");
        
        $http({
            method: 'GET',
            url: 'http://localhost:3000/users',
        })
       .then(function(response){
            console.log(response.data);
            fn(response.data);
       },
        function(error){
            console.log("Get User Data " + error);
        })


       
    }
}])