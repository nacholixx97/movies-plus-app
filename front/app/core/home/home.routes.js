export default function homeRoutes(routerHelper) {
  routerHelper.configureStates(getStates(), '404');
}

function getStates() {
  return [
    {
      state: 'main.home',
      config: {
        url: '/',
        templateUrl: 'app/core/home/homePage.component.html',
        controller: ['$scope', 'navigationService', function($scope, navigationService){
          $scope.goToMoviesListPage = () => {
            navigationService.goToMoviesListPage();
          };
          $scope.goToSeriesListPage = () => {
            navigationService.goToSeriesListPage();
          };
        }]
      }
    },
    {
      state: 'main.login',
      config: {
        url: '/login',
        template: '<login></login>',
        // redirectTo: 'main.movies.list'
      }
    },
    {
      state: 'main.confirm',
      config: {
        url: '/confirm/:user',
        template: '<confirm></confirm>',
        // redirectTo: 'main.movies.list'
      }
    },
    {
      state: 'main.movies',
      config: {
        url: '/movies',
        templateUrl: 'app/core/home/home.component.html',
        redirectTo: 'main.movies.list'
      }
    },
    {
      state: 'main.series',
      config: {
        url: '/series',
        templateUrl: 'app/core/home/home.component.html',
        redirectTo: 'main.series.list'
      }
    },
    {
      state: 'main.genders',
      config: {
        url: '/genders',
        templateUrl: 'app/core/home/home.component.html',
        redirectTo: 'main.genders.list'
      }
    },
    {
      state: 'main.users',
      config: {
        url: '/users',
        templateUrl: 'app/core/home/home.component.html',
        redirectTo: 'main.users.list'
      }
    },
    {
      state: 'main.home.404',
      config: {
        url: '404',
        templateUrl: 'app/core/404/404.template.html'
      }
    }
  ];
}

homeRoutes.$inject = ['routerHelper'];
