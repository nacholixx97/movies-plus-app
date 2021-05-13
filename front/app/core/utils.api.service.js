export default function utilsApiService($http, $q) {
  const service = {
    getGenders: () => {
      return $http.get(`${process.env.API_URL}/utils/genders`)
        .then(res => res.data.body)
        .catch(err => err.data);
    },
    create: (model) => {
      return $http.post(`${process.env.API_URL}/utils/genders`, model)
        .then(res => res.data.body)
        .catch(err => err.data);
    },
    delete: (id) => {
      return $http.delete(`${process.env.API_URL}/utils/genders/${id}`)
        .then(res => res.data.body)
        .catch(err => err.data);
    }
  };

  return service;
}

utilsApiService.$inject = ['$http', '$q'];
