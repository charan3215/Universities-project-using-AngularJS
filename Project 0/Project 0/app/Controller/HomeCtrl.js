app.controller('HomeCtrl', ["$scope", "$location", 'HomeService', function ($scope, $location, HomeService) {
    $scope.validLogout = function () {
        
        $location.path('/');
    }

    console.log("I am inside homeCtrl")

    $scope.searchUniversities = function () {

        $scope.showTable = true;

        console.log($scope.searchCountry);

        HomeService.getUniversities($scope.fn, $scope.searchCountry);

    }
    $scope.arr = [];
    $scope.fn = function (data) {
        // $scope.arr = [];
        $scope.universities = data;
        // console.log($scope.universities);
        if ($scope.universities.length >= 30) {
            for (var i = 0; i < 30; i++) {
                $scope.arr.push($scope.universities[i])
            }
        }
        else if ($scope.universities.length <= 30) {
            for (var i = 0; i < $scope.universities.length; i++) {
                $scope.arr.push($scope.universities[i]);
            }
        }
        // $scope.arr=$scope.universities;

        console.log($scope.arr);

       

        
    }

    $scope.sortData=function () {
        $scope.sortTable=true;
        $scope.showTable=false;
        var filteredUniversities = $scope.arr;

        if ($scope.selectedAlphabet !== "") {
            filteredUniversities = filteredUniversities.filter(function (country) {
              return (
                country.name.common.charAt(0).toUpperCase() ===
                $scope.selectedAlphabet
              );
            });
          }
    }

    

   
    $scope.alphabetArray = [];
    $scope.getAlphabet = function(){
        for (let i = 65; i <= 90; i++) {
            const letter = String.fromCharCode(i);
            alphabetArray.push({ letter });
            // return letter
            console.log(letter);
        }
    }
  

    // console.log(alphabetArray);
    // [
    //     { letter: 'A' },
    //     { letter: 'B' },
    //     { letter: 'C' },
    //     { letter: 'D' },
    //     { letter: 'E' },
    //     { letter: 'F' },
    //     { letter: 'G' },
    //     { letter: 'H' },
    // ]
}

])