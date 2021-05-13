function serieDetailComponentCtrl(seriesApiService, commonService, navigationService) {
  const $ctrl = this;

  $ctrl.$onInit = () => {
    console.log($ctrl.serie)

    $ctrl.fileUrl = `${process.env.API_URL}/files/${$ctrl.serie.file.uuid}`;
    $ctrl.gendersName = $ctrl.serie.genders.map(gender => gender.name).join(', ');

    $ctrl.actions = [
      {
        name: 'Modificar',
        action: $ctrl.update
      },
      {
        name: 'Eliminar',
        action: $ctrl.delete
      }
    ];

    $ctrl.strLimit = 350;
    $ctrl.serieDescriptionLimit = $ctrl.strLimit;

    $ctrl.isInitialized = true;
  };

  $ctrl.showMore = () => {
    $ctrl.serieDescriptionLimit = $ctrl.serie.description.length;
  };

  $ctrl.showLess = () => {
    $ctrl.serieDescriptionLimit = $ctrl.strLimit;
  };

  $ctrl.update = () => {
    navigationService.goToSerieUpdatePage($ctrl.serie.id);
  };

  $ctrl.delete = async () => {
    await seriesApiService.delete($ctrl.serie.id).catch(err => commonService.error(err));
    commonService.success(`Se eliminó la serie ${$ctrl.serie.name}`);
    navigationService.goToSeriesListPage();
  };
}

export default {
  templateUrl: 'app/core/series/detail/serie-detail.component.html',
  controller: ['seriesApiService', 'commonService', 'navigationService', serieDetailComponentCtrl],
  bindings: { serie: '<' }
};
