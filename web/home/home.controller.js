(function () {
    'use strict';

    angular
            .module('app')
            .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', '$uibModal'];
    function HomeController(UserService, $rootScope, $uibModal) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        vm.userAlbums = null;
        vm.deleteAlbum = deleteAlbum;
        vm.editAlbum = editAlbum;
        vm.addAlbum = addAlbum;
        vm.openDeleteModal = openDeleteModal;
        vm.openEditModal = openEditModal;
        vm.openAddModal = openAddModal;

        initController();

        function initController() {
            loadCurrentUser();
            //loadAllUsers();
            loadCurrentUserAlbums();
        }

        function loadCurrentUser() {
            vm.user = $rootScope.globals.currentUser;
            console.log("loging loadCurrentUser ... %o", vm.user);
        }

        function loadCurrentUserAlbums() {
            console.log("loging loadCurrentUserAlbums ... ");
            UserService.GetAlbums(vm.user)
                    .then(function (albums) {
                        vm.userAlbums = albums;
                        console.log("albums are ... %o", vm.userAlbums);
                    });
        }

        function loadAllUsers() {
            UserService.GetAll()
                    .then(function (users) {
                        vm.allUsers = users;
                    });
        }

        function deleteUser(id) {
//            UserService.Delete(id)
//                    .then(function () {
//                        loadAllUsers();
//                    });
            console.log("deleting user ...");
        }

        function deleteAlbum(album) {
            console.log("Deleting an album from the user ...");
        }

        function editAlbum(album_id) {
            console.log("Editing an album for the user ...");
        }

        function addAlbum() {
            console.log("Adding a new album for the user ...");
        }

        function openDeleteModal(album) {

            var modalInstance = $uibModal.open({
                templateUrl: "home/deletemodal.html",
                controller: "ModalDeleteCtrl",
                controllerAs: 'vm',
                size: '',
                resolve: {
                    delAlbum: function () {
                        return album;
                    }
                }
            });

            modalInstance.result.then(function (response) {
                $scope.result = `${response} button hitted`;
            });
        }

        function openEditModal() {
            console.log("Opening Edit modal ..");

            var modalInstance = $uibModal.open({
                templateUrl: "home/editmodal.html",
                controller: "ModalEditCtrl",
                controllerAs: 'vm',
                size: '',
                resolve: {
                    items: function () {
                        return true;
                    }
                }
            });

            modalInstance.result.then(function (response) {
                $scope.result = `${response} button hitted`;
            });
        }

        function openAddModal() {
            console.log("Opening Add modal ..");

            var modalInstance = $uibModal.open({
                templateUrl: "home/addmodal.html",
                controller: "ModalAddCtrl",
                controllerAs: 'vm',
                size: ''
            });

            modalInstance.result.then(function (response) {
                console.log(response);
                $scope.result = `${response} button hitted`;
            });
        }

    }

})();