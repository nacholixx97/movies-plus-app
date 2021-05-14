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
    
    const user = await usersApiService.getById($cookies.get('token'))
    if (user[0].kind==1) {
      $ctrl.pages.push(
        {
          name: 'Generos',
          code: 'genders',
          onClick: () => {
            navigationService.goToGendersListPage();          
          }
        },
        {
          name: 'Usuario',
          code: 'users',
          onClick: () => {
            navigationService.goToUsersListPage();          
          }
        }
      )
    }

    $ctrl.activePageCode = $location.url().split('/')[1];
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
  controller: ['$location' ,'navigationService', '$cookies', 'usersApiService', headerComponentCtrl],
  bindings: {}
};
