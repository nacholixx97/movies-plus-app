import loginComponent from './login.component';
// import testRoutes from './test.routes';
import usersApiService from '../users/user.service';

export default angular.module('loginModule', [])
  .component('login', loginComponent)
  .service('usersApiService', usersApiService)
  // .run(testRoutes);