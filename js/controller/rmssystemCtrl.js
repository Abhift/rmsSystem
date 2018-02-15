RmsApp.controller('rmsCtrl',
    ['$rootScope', '$scope', '$window', '$location', '$sessionStorage', '$state', '$http', function ($rootScope, $scope, $window, $location, $sessionStorage, $state, $http) {

        $scope.locationsBranchUi = true;
        $scope.categoriesUi = false;
        $scope.subcategoriesUi = false;
        $("#LoaderBody").hide();

        var request = {
            method: 'get',
            url: 'catalog.json',
            dataType: 'json',
            contentType: "application/json"
        };

        $scope.RMSCatalogList = new Array;

        $http(request)
            .success(function (jsonData) {
                $scope.RMSCatalogList = jsonData.data.locations;
                console.log($scope.RMSCatalogList);
            })
            .error(function () {

            });

        $scope.selectedBranchfunction = function (selectedBranch) {
            $scope.selectedBranch = selectedBranch;
            $scope.locationsBranchUi = false;
            $scope.categoriesUi = true;
            $scope.subcategoriesUi = false;
        }

        $scope.goBack = function () {
            $scope.locationsBranchUi = false;
            $scope.categoriesUi = true;
            $scope.subcategoriesUi = false;
        }

        $scope.selectedCatalogFunction = function (selectedCatalog) {
            $scope.selectedCatalog = selectedCatalog;
            $scope.locationsBranchUi = false;
            $scope.categoriesUi = false;
            $scope.subcategoriesUi = true;
        }

        $scope.selectedSubCatalogFunction = function (subCatalog) {
            var subCatalogName = "You clicked on " + subCatalog.name;
            swal("Good job!", subCatalogName, "success");
        }
    }
]);


