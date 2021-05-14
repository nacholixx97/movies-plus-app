import usersComponent from './users.component';
import usersRoutes from './users.routes';
import usersApiService from './services/user.service';

export default angular.module('usersModule', [])
  .component('users', usersComponent)
  .service('usersApiService', usersApiService)
  .run(usersRoutes);