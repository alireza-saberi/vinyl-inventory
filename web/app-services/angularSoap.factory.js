(function () {
    'use strict';

    angular
            .module('app')
            .factory('$soap', $soap);

    $soap.$inject = ['$q', '$http'];
    function $soap($q, $http) {
        var factory = {};

        factory.post = post;


        return factory;


        function post(action, params) {
            var deferred = $q.defer();
            var soapParams = new SOAPClientParameters();
            for (var param in params) {
                soapParams.add(param, params[param]);
            }
            var soapCallback = function (e) {
                if (e.constructor.toString().indexOf("function Error()") != -1) {
                    deferred.reject(e);
                } else {
                    deferred.resolve(e);
                }
            }
            SOAPClient.invoke('http://31.44.16.67/GetOwnersUsers', action, soapParams, true, soapCallback);
            return deferred.promise;
        }


    }

})();