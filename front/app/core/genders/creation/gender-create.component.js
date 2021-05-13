function genderCreationComponentCtrl(commonService, navigationService, utilsApiService) {
  const $ctrl = this;

  $ctrl.$onInit = () => {
    $ctrl.gender = {}

    $ctrl.isInitialized = true;
    $ctrl.savingInProcess = false;
  };

  $ctrl.save = async () => {
    $ctrl.savingInProcess = true;
    
    const gender = {
      code: $ctrl.gender.code,
      name: $ctrl.gender.name
    }
    
    const response = await utilsApiService.create(gender).catch(err => commonService.error(err.data.message))
    console.log(response)
    if (response) {
      $ctrl.savingInProcess = false;
      commonService.success(`Se generó el género ${gender.name.toUpperCase()}`);

      navigationService.goToGendersListPage();
    }
  }

  $ctrl.isValidForm = () => $ctrl.genderCreationForm.$valid;

  $ctrl.goToGendersListPage = () => navigationService.goToGendersListPage();
}

export default {
  templateUrl: 'app/core/genders/creation/gender-create.component.html',
  controller: ['commonService', 'navigationService', 'utilsApiService', genderCreationComponentCtrl],
  bindings: {}
};