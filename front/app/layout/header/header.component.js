function headerComponentCtrl($location, navigationService, $cookies, usersApiService) {
  const $ctrl = this;

  $ctrl.$onInit = async () => {
    if (!$cookies.get('token')) {
      navigationService.goToLoginPage();
    }

    $ctrl.pages = [];

    $ctrl.pages.push(
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
      }
    )
    
    $ctrl.kind = $cookies.get('kind');

    $ctrl.goToGendersListPage = () => {
      navigationService.goToGendersListPage();          
    }

    $ctrl.goToUsersListPage = () => {
      navigationService.goToUsersListPage();          
    }

    $ctrl.activePageCode = $location.url().split('/')[1];
  };
  
  $ctrl.goToHomePage = () => {
    navigationService.goToHomePage();
  };
  
  $ctrl.logout = () => {
    $cookies.remove('token');
    $cookies.remove('kind');
    navigationService.goToLoginPage();
  }
}

export default {
  templateUrl: 'app/layout/header/header.component.html',
  controller: ['$location' ,'navigationService', '$cookies', 'usersApiService', headerComponentCtrl],
  bindings: {}
};
