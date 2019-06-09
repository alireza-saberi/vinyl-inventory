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

        function deleteAlbum(album_id) {
            console.log("Deleting an album from the user ...")
        }

        function editAlbum(album_id) {
            console.log("Editing an album for the user ...");
        }

        function addAlbum() {
            console.log("Adding a new album for the user ...");
        }

        function openDeleteModal() {
            console.log("Opening delete modal ..");

            var modalInstance = $uibModal.open({
                templateUrl: "home/deletemodal.html",
                controller: "ModalDeleteCtrl",
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

    }

})();