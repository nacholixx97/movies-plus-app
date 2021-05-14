function confirmComponentCtrl($location, usersApiService, navigationService) {
  const $ctrl = this;
  
  $ctrl.$onInit = async () => {
    $ctrl.username = $location.url().split('/')[2];
    
    $ctrl.res = await usersApiService.confirm($ctrl.username);
    $ctrl.isInitialized = true;
  };
}

export default {
  templateUrl: 'app/core/confirm/confirm.component.html',
  controller: ['$location', 'usersApiService', 'navigationService', confirmComponentCtrl],
  bindings: {}
};