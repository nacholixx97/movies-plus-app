function headerComponentCtrl($location, navigationService, $cookies) {
  const $ctrl = this;

  $ctrl.$onInit = () => {
    $ctrl.pages = [
      {
        name: 'Películas',
        code: 'movies',
        onClick: () => {
          navigationService.goToMoviesListPage();
        }
      },
      {
        name: 'Series',
        code: 'series',
        onClick: () => {
          navigationService.goToSeriesListPage();          
        }
      },
      {
        name: 'Generos',
        code: 'genders',
        onClick: () => {
          navigationService.goToGendersListPage();          
        }
      }
    ];

    $ctrl.activePageCode = $location.url().split('/')[1];

    if (!$cookies.get('token')) {
      navigationService.goToLoginPage();
    }
  };
  
  $ctrl.goToHomePage = () => {
    navigationService.goToHomePage();
  };
  
  $ctrl.logout = () => {
    $cookies.remove('token')
    navigationService.goToLoginPage();
  }
}

export default {
  templateUrl: 'app/layout/header/header.component.html',
  controller: ['$location' ,'navigationService', '$cookies', headerComponentCtrl],
  bindings: {}
};
