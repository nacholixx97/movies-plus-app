export default function appRoutes($stateProvider) {
  $stateProvider
    .state('main', {
      url: '',
      template: '<ui-view></ui-view>',
      redirectTo: process.env.LOGIN_PAGE
    });
}
