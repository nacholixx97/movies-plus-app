export default function seriesRoutes(routerHelper) {
  routerHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'main.series.list',
      config: {
        url: '/',
        template: '<series></series>'
      }
    },
    {
      state: 'main.series.create',
      config: {
        url: '/new',
        template: '<serie-creation></serie-creation>'
      }
    },
    {
      state: 'main.series.detail',
      config: {
        url: '/{id:int}',
        template: '<serie-detail serie="$ctrl.serie"></serie-detail>',
        controller: ['serie', function (serie) {
          const $ctrl = this;
          $ctrl.serie = serie;
        }],
        controllerAs: '$ctrl',
        resolve: {
          serie: ['seriesApiService', '$stateParams', async (seriesApiService, $stateParams) => {
            const data = await seriesApiService.get($stateParams.id);
            return data;
          }]
        }
      }
    },
    {
      state: 'main.series.update',
      config: {
        url: '/{id:int}/update',
        template: '<serie-update serie="$ctrl.serie"></serie-update>',
        controller: ['serie', function (serie) {
          const $ctrl = this;
          $ctrl.serie = serie;
        }],
        controllerAs: '$ctrl',
        resolve: {
          serie: ['seriesApiService', '$stateParams', async (seriesApiService, $stateParams) => {
            const data = await seriesApiService.get($stateParams.id);
            return data;
          }]
        }
      }
    }
  ];
}

seriesRoutes.$inject = ['routerHelper'];
