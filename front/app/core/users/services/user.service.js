export default function usersApiService($http, $q) {
  const service = {
    getAll: () => {
      return $http.get(`${process.env.API_URL}/users`)
        .then(res => res.data.body)
        .catch(err => err.data);
    },
    getById: (id) => {
      return $http.get(`${process.env.API_URL}/users/id/${id}`)
        .then(res => res.data.body)
        .catch(err => err.data);
    },
    getByUsername: (username) => {
      return $http.get(`${process.env.API_URL}/users/username/${username}`)
        .then(res => res.data.body)
        .catch(err => err.data);
    },
    create: (user) => {
      return $http.post(`${process.env.API_URL}/users/create`, user)
        .then(res => res.data.body)
        .catch(err => err.data);
    },
    confirm: (username) => {
      return $http.get(`${process.env.API_URL}/users/confirm/${username}`)
        .then(res => res.data.body)
        .catch(err => err.data);
    },
    activate: (id) => {
      return $http.get(`${process.env.API_URL}/users/activate/${id}`)
        .then(res => res.data.body)
        .catch(err => err.data);
    },
    deactivate: (id) => {
      return $http.get(`${process.env.API_URL}/users/deactivate/${id}`)
        .then(res => res.data.body)
        .catch(err => err.data);
    },
  };

  return service;
}

usersApiService.$inject = ['$http', '$q'];