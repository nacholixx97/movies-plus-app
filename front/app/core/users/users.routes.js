export default function usersRoutes(routerHelper) {
  routerHelper.configureStates(getStates());
}

function getStates() {
  return [
    {
      state: 'main.users.list',
      config: {
        url: '/',
        template: '<users></users>'
      }
    }
  ];
}

usersRoutes.$inject = ['routerHelper'];  