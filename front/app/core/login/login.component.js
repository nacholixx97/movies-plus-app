function loginComponentCtrl($cookies, commonService, usersApiService, navigationService, ngDialog) {
  const $ctrl = this;

  $ctrl.$onInit = () => {
    $ctrl.credenciales = {}

    if ($cookies.get('token')) {
      navigationService.goToHomePage();
    }
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
          navigationService.goToHomePage();
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
      controller: ['$scope', 'usersApiService', 'mailApiService', function($scope, usersApiService, mailApiService){
        $scope.$onInit = () => {
          $scope.error = false;
          $scope.errorPass = false;
          $scope.registranding = false;
        }

        $scope.deshabilitarBotones = () => {
          $scope.registranding = true;
        }

        $scope.user = {};

        $scope.registrar = async () => {
          $scope.deshabilitarBotones()
          const user = {
            username: $scope.user.username,
            password: $scope.user.password,
            email: $scope.user.email,
          }
          if (!user.username || !user.password || !$scope.user.confirm || !user.email) {
            $scope.error = true;
          }else{
            $scope.error = false;
            if (user.password != $scope.user.confirm) {
              $scope.errorPass = true;
            }else{
              $scope.errorPass = false;
              
              const res = await usersApiService.create(user)
              if (res) {
                const mail = {
                  sendTo: user.email,
                  from: 'Movies Plus App',
                  subject: 'Confirmación de cuenta.',
                  message: `
                  <div style="text-align:center; margin-top:20px">
                  <a href="http://localhost:9000/#!/confirm/${user.username}" style="
                    color: #fff;
                    background-color: #337ab7;
                    border-color: #2e6da4;
                    text-decoration: none;
                    display: inline-block;
                    margin-bottom: 0;
                    font-weight: normal;
                    text-align: center;
                    white-space: nowrap;
                    vertical-align: middle;
                    touch-action: manipulation;
                    cursor: pointer;
                    background-image: none;
                    border: 1px solid transparent;
                    padding: 6px 12px;
                    font-size: 14px;
                    line-height: 1.42857;
                    border-radius: 4px;
                    font-family: system-ui;
                    ">Confirmar</a>
                    </div>
                    `
                  }

                  dialog.close();
                  
                  await mailApiService.send(mail)
                  
                  commonService.success('Su cuenta ha sido creada, por favor, verifique su casilla de correo para confirmarla.')
                }
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