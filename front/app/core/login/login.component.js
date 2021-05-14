function loginComponentCtrl($cookies, commonService, usersApiService, navigationService, ngDialog) {
  const $ctrl = this;

  $ctrl.$onInit = () => {
    $ctrl.isInitialized = true;

    $ctrl.credenciales = {}
  };

  $ctrl.login = async () => {
    if ($ctrl.form.$valid) {
      const credenciales = {
        username: $ctrl.credenciales.username,
        password: $ctrl.credenciales.password
      }

      const res = await usersApiService.getByUsername(credenciales.username)
      if (!res[0]) {
        commonService.error('Usuario o contraseña incorrectos.')
      }else{
        if (res[0].password != credenciales.password) {
          commonService.error('La contraseña ingresada no es válida.')
        }else{
          $cookies.put('token', res[0].id)
          navigationService.goToHomePage()
        }
      }

    }else{
      commonService.error('Por favor, complete los campos.')
    }
  };

  $ctrl.registerForm = () => {
    const dialog = ngDialog.open({
      template: 'app/core/login/registerForm.html',
      className: 'ngdialog-theme-default',
      controller: ['$scope', function($scope){
        $scope.$onInit = () => {
          $scope.error = false;
          $scope.errorPass = false;
        }

        $scope.user = {};

        $scope.registrar = () => {
          const user = {
            username: $scope.user.username,
            password: $scope.user.password,
            confirm: $scope.user.confirm,
            email: $scope.user.email,
          }
          if (!user.username || !user.password || !user.confirm || !user.email) {
            $scope.error = true;
          }else{
            $scope.error = false;
            if (user.password != user.confirm) {
              $scope.errorPass = true;
            }else{
              $scope.errorPass = false;
              console.log(user)
            }
          }
        }

        $scope.cerrar = () => {
          dialog.close()
        }
      }]
    })
  }
}

export default {
  templateUrl: 'app/core/login/login.component.html',
  controller: ['$cookies', 'commonService', 'usersApiService', 'navigationService', 'ngDialog', loginComponentCtrl],
  bindings: {}
};