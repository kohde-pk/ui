angular
    .module('app.route', ['ngRoute'])
    .config(routes);

    function routes($routeProvider) {
        $routeProvider.
            when('/employees', {
                templateUrl: 'templates/employees.html',
                controller: 'employeesController',
                controllerAs: 'employees'
            })
            .when('/aboutUs', {
                templateUrl: 'templates/aboutUs.html',
                controller: 'aboutUsController',
                controllerAs: 'aboutUs'
            })
            .when('/comment', {
                templateUrl: 'templates/comment.html',
                controller: 'commentController',
                controllerAs: 'comment'
            })
            .when('/jobs', {
                templateUrl: 'templates/jobs.html',
                controller: 'jobsController',
                controllerAs: 'jobs'
            })
            .when('/slide', {
                templateUrl: 'templates/slide.html',
                controller: 'slideController',
                controllerAs: 'slide'
            })
            .when('/skills', {
                templateUrl: 'templates/skills.html',
                controller: 'skillsController',
                controllerAs: 'skills'
            })
            .when('/graphs', {
                templateUrl: 'templates/graphs.html',
                controller: 'graphsController',
                controllerAs: 'graphs'
            })
            .when('/footer', {
                templateUrl: 'templates/footer.html',
                controller: 'footerController',
                controllerAs: 'footer'
            })
            .when('/news', {
                templateUrl: 'templates/news.html',
                controller: 'newsController',
                controllerAs: 'news'
            })
            .when('/resume', {
                templateUrl: 'templates/resume.html',
                controller: 'resumeController',
                controllerAs: 'resume'
            })
            .when('/whereWe', {
                templateUrl: 'templates/where.html',
                controller: 'whereWeController'
            })
            .when('/facts', {
                templateUrl: 'templates/facts.html',
                controller: 'factsController'
            })
            .when('/grid', {
                templateUrl: 'templates/grid.html',
                controller: 'gridController'
            })
            .when('/details', {
                templateUrl: 'templates/details.html',
                controller: 'detailsController'
            })
            .otherwise({
                redirectTo: '/whereWe'
            });
    }