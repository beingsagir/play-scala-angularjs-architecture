angular

    .module('ngViewExample', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/index', {
                    templateUrl: '/'

                })
                .when('/Book/:bookId/ch/:chapterId', {
                    templateUrl: 'chapter.html'
                })

            .otherwise({redirectTo: '/index'});
            $locationProvider.html5Mode(true);
        }])

