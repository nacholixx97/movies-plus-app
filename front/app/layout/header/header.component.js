function headerComponentCtrl($location, navigationService) {
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
  };

  $ctrl.goToHomePage = () => {
    navigationService.goToHomePage();
  };
}

export default {
  templateUrl: 'app/layout/header/header.component.html',
  controller: ['$location' ,'navigationService', headerComponentCtrl],
  bindings: {}
};
