export default function gendersRoutes(routerHelper) {
  routerHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'main.genders.list',
      config: {
        url: '/',
        template: '<genders></genders>'
      }
    },
    {
      state: 'main.genders.create',
      config: {
        url: '/new',
        template: '<gender-create></gender-create>'
      }
    }
  ];
}

gendersRoutes.$inject = ['routerHelper'];