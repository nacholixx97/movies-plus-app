import seriesComponent from './series.component';
import serieDetailComponent from './detail/serie-detail.component';
import serieCreationComponent from './creation/serie-creation.component';
import serieUpdateComponent from './update/serie-update.component';
import seriesRoutes from './series.routes';
import seriesApiService from './service/series.api.service';

export default angular.module('seriesModule', [])
  .component('series', seriesComponent)
  .component('serieDetail', serieDetailComponent)
  .component('serieCreation', serieCreationComponent)
  .component('serieUpdate', serieUpdateComponent)
  .service('seriesApiService', seriesApiService)
  .run(seriesRoutes);