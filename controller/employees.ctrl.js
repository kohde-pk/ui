angular.module('app.core').controller('employeesController', ['$scope', '$http', function($scope, $http) {
    var vm = this;

    $scope.footerDetails = "Built using SASS, HTML, AngularJS"

    $scope.template = '/templates/resume.html';
    $scope.cat = "Resume";

    $scope.footerDetail = 'Built with: AngularJS, SASS';
    $scope.resume = {
        id: 'kohde',
        name: 'Kathleen Ohde',
        title: 'Software Engineer I',
        intro: 'I enjoy collaborating with peers to create applications. I think everyone has a different viewpoint and want to work on a team where everyone can be treated with respect and feel that their opinions are heard. I feel the best ideas come when people get together and collaborate on a solution together with open minds.',
        skills: ['JavaScript','HTML5','CSS','AngularJS','Bootstrap 4','SASS','SQL','CMS','Application Management','TeamSite CMS','OpenDeploy','Git','Responsive Web Design'],
        exps: ['First National Bank of Omaha ','ProKarma'],
        experience: [{'company':'First National Bank of Omaha', 'date':'December 1986 - April 2017', 'title':'UI Developer/Programmer Analyst II'},
                    {'company':'ProKarma', 'date':'April 2017 - Present', 'title':'Software Engineer I'}],
        employer: 'ProKarma',
        startDate: '05/25.27',
        cellPhone: '402.880.7600',
        workPhone: '402-938-4778',
        address: '7259 N 155th Ter',
        city: 'Bennington',
        state: 'NE',
        zip: '68007',
        workEmail: 'kohde@prokarma.com',
        personalEmail: 'kat.ohde@gmail.com',
        footerDetails: 'HTML, CSS, JSON, SASS, AngularJS'

    }

}]);