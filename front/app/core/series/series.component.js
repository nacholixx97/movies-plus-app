function seriesComponentCtrl(seriesApiService, navigationService, commonService) {
  const $ctrl = this;
  $ctrl.isInitialized = false;

  $ctrl.$onInit = async () => {
    $ctrl.actions = [
      {
        name: 'Agregar',
        action: $ctrl.goToSeriesCreationPage

      }
    ];
    $ctrl.series = await seriesApiService.list().catch(err => commonService.error(err.message));

    if ($ctrl.series) {
      angular.forEach($ctrl.series, (serie) => {
        serie.fileUrl = `${process.env.API_URL}/files/${serie.file_uuid}`;
      });
    }

    $ctrl.isInitialized = true;
  };

  $ctrl.goToSeriesCreationPage = () => {
    navigationService.goToSeriesCreationPage();
  }

  $ctrl.goToSerieDetail = (id) => {
    navigationService.goToSerieDetailPage(id);
  }
}

export default {
  templateUrl: 'app/core/series/series.component.html',
  controller: ['seriesApiService', 'navigationService', 'commonService', seriesComponentCtrl],
  bindings: {}
};
