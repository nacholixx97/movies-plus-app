export default function usersApiService($http, $q) {
  const service = {
    getByUsername: (username) => {
      console.log(`${process.env.API_URL}/users/username/?user=${username}`)
      return $http.get(`${process.env.API_URL}/users/username/?user=${username}`)
        .then(res => res.data.body)
        .catch(err => err.data);
    }
  };

  return service;
}

usersApiService.$inject = ['$http', '$q'];