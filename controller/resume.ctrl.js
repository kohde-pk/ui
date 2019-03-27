angular.module('app.core').controller('resumeController', ['$scope', function($scope) {
    
    $scope.footerDetails = 'Built with: AngularJS, SASS';
    $scope.resume = {
        id: 'kohde',
        name: 'Kathleen Ohde',
        title: 'Software Engineer I',
        intro: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat unde optio sapiente aut voluptatibus, voluptates eum fugiat labore eos vero commodi expedita. Facilis ad minus tempore dolor sapiente, ipsum nostrum.<br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat unde optio sapiente aut voluptatibus, voluptates eum fugiat labore eos vero commodi expedita. Facilis ad minus tempore dolor sapiente, ipsum nostrum.',
        skills: ['JavaScript','HTML5','CSS','AngularJS','VueJS','Bootstrap 4','SASS','SQL','CMS','Application Management','TeamSite CMS','OpenDeploy','Git','CSS Grid'],
        exps: [
            {'name':'First National Bank of Omaha',
            'dates':'December 6, 1986 - April 12, 2017',
            'desc': 'Quaerat unde optio sapiente aut voluptatibus, voluptates eum fugiat labore eos vero commodi expedita.'},
            {'name':'ProKarma',
            'dates':'April 22, 2017 - Present',
            'desc':'Quaerat unde optio sapiente aut voluptatibus, voluptates eum fugiat labore eos vero commodi expedita.'}
        ],
        employer: 'ProKarma',
        startDate: '05/25.27',
        cellPhone: '402.880.7600',
        workPhone: '402-345-1234',
        address: '7259 N 155th Ter',
        city: 'Bennington',
        state: 'NE',
        zip: '68007',
        workEmail: 'kohde@prokarma.com',
        personalEmail: 'kat.ohde@gmail.com',
        workSite: 'www.prokarma.com',
        viewResume: false
    }


}]);