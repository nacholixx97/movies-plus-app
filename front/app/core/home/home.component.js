function homeComponentCtrl(navigationService) {
  const $ctrl = this;

  $ctrl.$onInit = () => {};
}

export default {
  templateUrl: 'app/core/home/home.component.html',
  controller: ['navigationService', homeComponentCtrl],
  bindings: {}
};
