angular.module('caleb')
  .service('LoadData', function LoadData($http, $q) {
    var baseUrl = 'http://dev-caleb-heisey.pantheon.io/api/Caleb/data_get_all/?count=-1';//pantheon data, '/?count=-1' allows us to see more than just the most recent 10 posts
    
    function fetch(start, end) {
      console.time("Fetch");
      var url =  baseUrl ; 
      var request = $http({
        method: 'get',
        url: url 
      });
      return request.then(handleSuccess, handleError,console.timeEnd("Fetch"));
    }

    function handleError(response) {
      if (
        !angular.isObject(response.data) ||
        !response.data.message
      ) {
        return $q.reject('An unknown error occurred.');
      }

      return $q.reject(response.data.message);
    }

    function handleSuccess(response) {
      return response.data;
    }

    return({
      fetch: fetch
    });
  });
