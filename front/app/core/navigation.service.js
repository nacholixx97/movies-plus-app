export default function navigationService($state, $location) {
  const service = {
    reload: () => {
      $state.reload();
    },
    goToURL: (URL) => {
      $location.url(URL);
    },
    goToLoginPage: () => {
      $state.go('main.login');
    },
    goToHomePage: () => {
      $state.go('main.home');
    },
    goToMoviesListPage: () => {
      $state.go('main.movies.list');
    },
    goToMovieCreationPage: () => {
      $state.go('main.movies.create');
    },
    goToMovieDetailPage: (id) => {
      $state.go('main.movies.detail', { id });
    },
    goToMovieUpdatePage: (id) => {
      $state.go('main.movies.update', { id });
    },
    goToSeriesListPage: () => {
      $state.go('main.series.list');
    },
    goToSeriesCreationPage: () => {
      $state.go('main.series.create');
    },
    goToSerieDetailPage: (id) => {
      $state.go('main.series.detail', { id });
    },
    goToSerieUpdatePage: (id) => {
      $state.go('main.series.update', { id });
    },
    goToGendersListPage: () => {
      $state.go('main.genders.list');
    },
    goToGendersCreationPage: () => {
      $state.go('main.genders.create');
    },
    goToUsersListPage: () => {
      $state.go('main.users.list');
    },
    goToUsersCreationPage: () => {
      $state.go('main.users.create');
    }
  };

  return service;
}

navigationService.$inject = ['$state', '$location'];
