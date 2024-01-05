app.service("HomeService",["$http",function($http) {
    this.getUniversities=function (fn,data) {
        var apiUrl = `http://universities.hipolabs.com/search?country=${data}`
        $http
        (
            {
            method: 'GET',
            url: apiUrl,
        })
        .then(function (response) {

           
            fn(response.data);
        }),function(error) {
            console.log(error);
            
        }
        
    }

    
}])