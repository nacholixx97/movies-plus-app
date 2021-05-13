function SerieCreationComponentCtrl(navigationService, commonService, utilsApiService, seriesApiService) {
  const $ctrl = this;
  
  $ctrl.$onInit = async () => {
    $ctrl.serie = {};
    $ctrl.genders = await utilsApiService.getGenders();

    $ctrl.isInitialized = true;

    $ctrl.save = async () => {
    $ctrl.savingInProcess = true;

    const serie = {
      code: $ctrl.serie.code,
      name: $ctrl.serie.name,
      originalName: $ctrl.serie.originalName,
      seasons: $ctrl.serie.seasons,
      totalDuration: 0,
      file: $ctrl.serie.file,
      year: $ctrl.serie.year,
      gendersIds: $ctrl.serie.genders.map(gender => gender.id),
      description: $ctrl.serie.description
    };

    const response = await seriesApiService.save(serie).catch(err => commonService.error(err.data.message));
    if (response) {
      $ctrl.savingInProcess = false;
      commonService.success(`Se generó la serie ${response.name}`);

      navigationService.goToSerieDetailPage(response.id);
    }
  };

  $ctrl.goToSeriesListPage = () => navigationService.goToSeriesListPage();

  $ctrl.isValidForm = () => $ctrl.serieCreationForm.$valid && $ctrl.serie.file && $ctrl.serie.genders.length;
  }
}

export default {
  templateUrl: 'app/core/series/creation/serie-creation.component.html',
  controller: ['navigationService','commonService' ,'utilsApiService', 'seriesApiService', SerieCreationComponentCtrl],
  bindings: {}
};
