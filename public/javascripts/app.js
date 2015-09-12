angular.module('modelManager', ['ui.router', 'modelManager.controllers'])

    .config(function($stateProvider, $compileProvider, $urlRouterProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|content|file):/);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|content|file):/);
        $stateProvider

            .state('about', {
                url: "/about",
                templateUrl: "ok.scala.html",
               // controller: '/getTopNavBarData'
            })



        $urlRouterProvider.otherwise('/dashboard');
    });
     /*
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/index', {
                templateUrl: '/'

            })

            .when('/about', {
                templateUrl: '/getTopNavBarData'

            })

            .when('/contact', {
                templateUrl: '/getTopNavBarData'

            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'chapter.html'
            })

            .otherwise({redirectTo: '/index'});
        $locationProvider.html5Mode(true);
    }]);

angular.module('modelManager', ['ui.router', 'modelManager.controllers'])

    .config(function($stateProvider, $compileProvider, $urlRouterProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|content|file):/);
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|content|file):/);
        $stateProvider

            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "partials/dashboard.scala.html",
                controller: 'dashboardCtrl'
            })

            .state('comparemodel', {
                url: "/comparemodel",
                templateUrl: "partials/comparemodel.scala.html",
                controller: 'comparemodelCtrl'
            })

            .state('metadata', {
                url: "/metadata",
                templateUrl: "partials/metadata.scala.html",
                controller: 'metadataCtrl'
            })

            .state('metadata.entitycfg', {
                url: "/entitycfg",
                templateUrl: "partials/entitycfg.scala.html",
                controller: 'entitycfgCtrl'
            })

            .state('metadata.datasourcecfg', {
                url: "/datasourcecfg",
                templateUrl: "partials/datasourcecfg.scala.html",
                controller: 'datasourcecfgCtrl'
            })

            .state('metadata.graphview', {
                url: "/graphview",
                templateUrl: "partials/graphview.scala.html",
                controller: 'graphviewCtrl'
            })

            .state('entitydetail', {
                url: "/entitydetail",
                templateUrl: "partials/entitydetail.scala.html",
                controller: 'entitydetailCtrl'
            })

            .state('modelbrowser', {
                url: "/modelbrowser",
                templateUrl: "partials/modelbrowser.scala.html",
                controller: 'modelbrowserCtrl'
            })

            .state('modelbrowser.allmodels', {
                url: "/allmodels",
                templateUrl: "partials/modelviewer.scala.html",
                controller: 'allmodelsCtrl'
            })

            .state('modelbrowser.mymodels', {
                url: "/mymodels",
                templateUrl: "partials/modelviewer.scala.html",
                controller: 'mymodelsCtrl'
            })

            .state('modelbrowser.sharedmodels', {
                url: "/sharedmodels",
                templateUrl: "partials/modelviewer.scala.html",
                controller: 'sharedmodelsCtrl'
            })

            .state('modelbuilder', {
                url: "/modelbuilder",
                templateUrl: "partials/modelbuilder.scala.html",
                controller: 'modelbuilderCtrl'
            })

            .state('modelbuilder.createmodel', {
                url: "/createmodel",
                templateUrl: "partials/createmodel.scala.html",
                controller: 'createmodelCtrl'
            })

            .state('modelbuilder.createtype3model', {
                url: "/createmodel",
                templateUrl: "partials/createmodel.scala.html",
                controller: 'createtype3modelCtrl'
            })

            .state('adminsettings', {
                url: "/adminsettings",
                templateUrl: "partials/adminsettings.scala.html",
                controller: 'adminsettingsCtrl'
            })

            .state('userView', {
                url: "/userView",
                templateUrl: "userView",
                controller: 'userCtrl'
            })

            .state('userdetail',{
                url: '/userdetail',
                templateUrl: 'userDetail',
                controller: 'userDetailCtrl'
            })

            .state('usergroupdetail',{
                url: '/usergroupdetail',
                templateUrl: 'userGroupDetail',
                controller: 'userGroupdetailCtrl'
            })

            .state('setting',{
                url: '/setting',
                templateUrl: "partials/viewtable.scala.html",
                controller: 'viewTableCtrl'
            })

            .state('logout',{
                url: '/logout',
                templateUrl: "logout"
            })

            .state('testReport',{
                url: '/testReport',
                templateUrl: "testReport",
                controller: 'testReportCtrl'
            });


        $urlRouterProvider.otherwise('/dashboard');
    });*/