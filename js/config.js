RmsApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/RMSystem');

        function delay($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 1000);
            return delay.promise;
        }

        $stateProvider
            .state("RMSystem", {
                url: '/RMSystem',
                templateUrl: 'views/RMSystem.html',
                resolve: { delay: delay }
            })
            //.state("maincontainer", {
            //    url: '/maincontainer',
            //    templateUrl: 'views/shared/maincontainer.html',
            //    resolve: { delay: delay }
            //})
            //.state("esscontainer", {
            //    url: '/esscontainer',
            //    templateUrl: 'views/shared/maincontainer.html',
            //    resolve: { delay: delay }
            //})
    }]);




