function usersComponentCtrl(usersApiService, commonService, ngDialog) {
  const $ctrl = this;

  $ctrl.$onInit = async () => {
    $ctrl.users = await usersApiService.getAll()

    $ctrl.isInitialized = true;
  };

  $ctrl.desactivar = async (user) => {
    const dialog = ngDialog.open({
      template: 'app/core/users/deleteForm.html',
      className: 'ngdialog-theme-default',
      controller: ['$scope', function($scope){
        $scope.user = user;

        $scope.continuar = async () => {
          await usersApiService.deactivate(user.id);
          commonService.success(`Se ha desactivado el usuario ${user.username.toUpperCase()}.`);
          $ctrl.users = await usersApiService.getAll();
          dialog.close();
        }

        $scope.cancelar = () => dialog.close();
      }]
    })
  }
  
  $ctrl.activar = async (user) => {
    await usersApiService.activate(user.id);
    commonService.success(`Se ha activado el usuario ${user.username.toUpperCase()}.`);
    $ctrl.users = await usersApiService.getAll();
  }
}

export default {
  templateUrl: 'app/core/users/users.component.html',
  controller: ['usersApiService', 'commonService', 'ngDialog', usersComponentCtrl],
  bindings: {}
};