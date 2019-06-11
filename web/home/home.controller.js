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
        vm.userAlbums = null;
        vm.openDeleteModal = openDeleteModal;
        vm.openEditModal = openEditModal;
        vm.openAddModal = openAddModal;
        vm.conditionConveter = conditionConveter;

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

        function conditionConveter(input) {
            var code = parseInt(input);
            var condition;
            switch (code) {
                case 1:
                    condition = "Mint (M)";
                    break;
                case 2:
                    condition = "Near Mint (NM or M-)";
                    break;
                case 3:
                    condition = "Very Good Plus (VG+)";
                    break;
                case 4:
                    condition = "Very Good (VG)";
                    break;
                case 5:
                    condition = "Good (G)";
                    break;
                case 6:
                    condition = "Good Plus (G+)";
                    break;
                case 7:
                    condition = "Poor (P)";
                    break;
                case 8:
                    condition = "Fair (F)";
                    break;
                default:
                    condition = "-";
            }
            return condition;
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
                initController();
            });
        }

        function openEditModal(album) {
            console.log("Opening Edit modal ..");

            var modalInstance = $uibModal.open({
                templateUrl: "home/editmodal.html",
                controller: "ModalEditCtrl",
                controllerAs: 'vm',
                size: '',
                resolve: {
                    editAlbum: function () {
                        return album;
                    }
                }
            });

            modalInstance.result.then(function (response) {
                initController();
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
                initController();
            });
        }

    }

})();