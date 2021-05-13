function serieUpdateComponentCtrl(seriesApiService, navigationService, commonService, utilsApiService) {
  const $ctrl = this;

  $ctrl.$onInit = async () => {
    $ctrl.genders = await utilsApiService.getGenders();

    $ctrl.isInitialized = true;
    $ctrl.savingInProcess = false;
  };

  $ctrl.save = async () => {
    $ctrl.savingInProcess = true;

    const serie = {
      id: $ctrl.serie.id,
      code: $ctrl.serie.code,
      name: $ctrl.serie.name,
      originalName: $ctrl.serie.originalName,
      duration: '',
      seasons: $ctrl.serie.seasons,
      file: $ctrl.serie.file,
      year: $ctrl.serie.year,
      gendersIds: $ctrl.serie.genders.map(gender => gender.id),
      description: $ctrl.serie.description
    };

    const response = await seriesApiService.update(serie).catch(err => commonService.error(err.data.message));
    if (response) {
      $ctrl.savingInProcess = false;
      commonService.success(`Se modificó la serie ${response.name.toUpperCase()}`);

      navigationService.goToSerieDetailPage(response.id);
    }
  };

  $ctrl.goToSeriesListPage = () => navigationService.goToSeriesListPage();

  $ctrl.isValidForm = () => $ctrl.serieUpdateForm.$valid && $ctrl.serie.file && $ctrl.serie.genders.length;
}

export default {
  templateUrl: 'app/core/series/update/serie-update.component.html',
  controller: [
    'seriesApiService',
    'navigationService',
    'commonService',
    'utilsApiService',
    serieUpdateComponentCtrl
  ],
  bindings: { serie: '<' }
};