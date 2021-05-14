export default function mailApiService($http, $q) {
  const service = {
    send: (mail) => {
      return $http.post(`${process.env.API_URL}/mail/send/`, mail)
        .then(res => res.body)
        .catch(err => err.body);
    }
  };

  return service;
}

mailApiService.$inject = ['$http', '$q'];