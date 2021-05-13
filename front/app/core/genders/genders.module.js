import gendersComponent from './genders.component';
import genderCreationComponent from './creation/gender-create.component';
import gendersRoutes from './genders.routes';

export default angular.module('gendersModule', ['ngDialog'])
  .component('genders', gendersComponent)
  .component('genderCreate', genderCreationComponent)
  .run(gendersRoutes);