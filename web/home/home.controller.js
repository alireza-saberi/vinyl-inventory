(function () {
    'use strict';

    angular
            .module('app')
            .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope', '$uibModal'];
    function HomeController(UserService, $rootScope, $uibModal) {
        var vm = this;

        vm.user = null;
        vm.userAlbums = null;
        vm.openDeleteModal = openDeleteModal;
        vm.openEditModal = openEditModal;
        vm.openAddModal = openAddModal;
        vm.conditionConveter = conditionConveter;
        vm.openConditionModal = openConditionModal;

        initController();

        function initController() {
            loadCurrentUser();
            loadCurrentUserAlbums();
        }

        function loadCurrentUser() {
            vm.user = $rootScope.globals.currentUser;
        }

        function loadCurrentUserAlbums() {
            console.log("loging loadCurrentUserAlbums ... ");
            UserService.GetAlbums(vm.user)
                    .then(function (albums) {
                        vm.userAlbums = albums;
                        console.log("albums are ... %o", vm.userAlbums);
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
                    condition = "Near Mint (NM)";
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
                default:
                    condition = "-";
            }
            return condition;
        }

        function openDeleteModal(album) {

            var modalInstance = $uibModal.open({
                templateUrl: "home/delete.view.modal.html",
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

            var modalInstance = $uibModal.open({
                templateUrl: "home/edit.view.modal.html",
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

            var modalInstance = $uibModal.open({
                templateUrl: "home/add.view.modal.html",
                controller: "ModalAddCtrl",
                controllerAs: 'vm',
                size: ''
            });

            modalInstance.result.then(function (response) {
                initController();
            });
        }

        function openConditionModal() {

            var modalInstance = $uibModal.open({
                templateUrl: "home/condition.view.modal.html",
                controller: "ModalConditionCtrl",
                controllerAs: 'vm',
                size: ''
            });

            modalInstance.result.then(function (response) {
                initController();
            });
        }

    }

})();