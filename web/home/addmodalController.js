(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalAddCtrl', ModalAddCtrl);

    ModalAddCtrl.$inject = ['$uibModalInstance', 'UserService', '$rootScope'];
    function ModalAddCtrl($uibModalInstance, UserService, $rootScope) {
        var vm = this;

        vm.save = save;
        vm.cancel = cancel;
//        vm.album = null;

        vm.album = {
            album_name: '',
            artist: '',
            album_year: '',
            album_condition: '',
            note: '',
            upc: '',
            username: $rootScope.globals.currentUser.username
        };

        initController();

        function initController() {
            console.log("ModalAddCtrl is opened ..");
        }

        function save() {
            console.log("Save is clicked.");
            console.log("Trying to save %o", vm.album);
            UserService.addAlbum(vm.album);
            $uibModalInstance.close("Yes");
        }

        function cancel() {
            console.log("cancel is clicked.");
            $uibModalInstance.dismiss("No");
        }
    }

})();