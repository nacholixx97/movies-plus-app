
function gendersComponentCtrl(commonService, ngDialog, utilsApiService, navigationService) {

  const $ctrl = this;

  $ctrl.$onInit = async () => {
    $ctrl.actions = [
      {
        name: 'Agregar',
        action: $ctrl.goToGendersCreationPage
      }
    ]

    $ctrl.genders = await utilsApiService.getGenders();

    $ctrl.isInitialized = true;
  };

  $ctrl.goToGendersCreationPage = async () => {
    navigationService.goToGendersCreationPage()
  }

  $ctrl.eliminar = (gender) => {
    const dialog = ngDialog.open({
      template: 'app/core/genders/confirmacion.html',
      className: 'ngdialog-theme-default',
      controller: ['$scope', function($scope){
        $scope.gender = gender;

        $scope.eliminar = async () => {
          const result = await utilsApiService.delete(gender.id);
          if (result.status === 'error') {
            commonService.error('Cuidado, esta intetando eliminar un género que esta ligado a otros registros.');
          }else{
            commonService.success('Se ha eliminado el género con éxito.');
            $ctrl.genders = await utilsApiService.getGenders();
          }
          dialog.close();
        }

        $scope.cerrar = () => dialog.close();
      }]
  });
  }
}

export default {
  templateUrl: 'app/core/genders/genders.component.html',
  controller: ['commonService', 'ngDialog', 'utilsApiService', 'navigationService', gendersComponentCtrl],
  bindings: {}
};