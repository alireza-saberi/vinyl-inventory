﻿(function () {
    'use strict';

    angular
            .module('app')
            .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.GetAlbums = GetAlbums;
        
        service.deleteAlbum = deleteAlbum;
        service.editAlbum = editAlbum;
        service.addAlbum = addAlbum;

        return service;


        function GetAlbums(user) {
            console.log("getting albums inside service from the user %o...", user);
            return $http.post('http://localhost:8080/VinylRecord/webresources/albums/readalbums', user).then(handleSuccess, handleError('Error getting user\'s album'));
        }
        
        function deleteAlbum(album){
            return $http.post('http://localhost:8080/VinylRecord/webresources/albums/delalbum', album).then(handleSuccess, handleError('Error deleting an album'));
        }
        
        function editAlbum(album){
            return $http.post('http://localhost:8080/VinylRecord/webresources/albums/updatalbum', album).then(handleSuccess, handleError('Error updating an album'));
        }
        
        function addAlbum(album) {
            return $http.post('http://localhost:8080/VinylRecord/webresources/albums/addalbum', album).then(handleSuccess, handleError('Error adding an album'));            
        }

        function GetAll() {
            console.log("getting all inside service ...");
            return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post('http://localhost:8080/VinylRecord/webresources/user/adduser', {first_name: user.firstName, last_name: user.lastName, username: user.username, user_password: user.password}).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
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
