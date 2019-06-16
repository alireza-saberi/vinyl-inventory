(function () {
    'use strict';

    angular
            .module('app')
            .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAlbums = GetAlbums;

        service.deleteAlbum = deleteAlbum;
        service.editAlbum = editAlbum;
        service.addAlbum = addAlbum;
        service.getByUpc = getByUpc;
        service.albumConditions = albumConditions;

        return service;


        function GetAlbums(user) {
            console.log("getting albums inside service from the user %o...", user);
            return $http.post('http://localhost:8080/VinylRecord/webresources/albums/readalbums', user).then(handleSuccess, handleError('Error getting user\'s album'));
        }

        function deleteAlbum(album) {
            return $http.post('http://localhost:8080/VinylRecord/webresources/albums/delalbum', album).then(handleSuccess, handleError('Error deleting an album'));
        }

        function editAlbum(album) {
            return $http.post('http://localhost:8080/VinylRecord/webresources/albums/updatalbum', album).then(handleSuccess, handleError('Error updating an album'));
        }

        function addAlbum(album) {
            return $http.post('http://localhost:8080/VinylRecord/webresources/albums/addalbum', album).then(handleSuccess, handleError('Error adding an album'));
        }


        function getByUpc() {

            console.log("getByUpc is called ...");



            return $http({
                method: 'GET',
                url: 'http://api.napster.com/v2.2/albums/upc/602498619070', ///190758991320',
                headers: {
                    'apikey': 'ZjJiN2VkMmMtMDAzMC00ZmExLWE0NTEtOTNmMzA0NGNmZGI5'
                }}).then(handleSuccess, handleError('Error getting user by id'))
//            return $http.get('http://api.napster.com/v2.2/albums/upc/602498619070',
//            {
//            headers: {'Authorization': 'apikey: ZjJiN2VkMmMtMDAzMC00ZmExLWE0NTEtOTNmMzA0NGNmZGI5'
//            }
//        }
//        ).then(handleSuccess, handleError('Error getting user by id'));
//            return $http.get('http://api.napster.com/v2.2/albums/upc/602498619070?apikey=ZjJiN2VkMmMtMDAzMC00ZmExLWE0NTEtOTNmMzA0NGNmZGI5').then(handleSuccess, handleError('Error getting user by id'));
        }
        
        function albumConditions(){
            return $http.get('http://localhost:8080/VinylRecord/webresources/albums/getconditions').then(handleSuccess, handleError('Error getting user\'s album'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return {success: false, message: error};
            };
        }
    }

})();
