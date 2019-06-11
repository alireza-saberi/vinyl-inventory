(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalAddCtrl', ModalAddCtrl);

    ModalAddCtrl.$inject = ['$uibModalInstance', 'UserService', '$rootScope', 'FlashService'];
    function ModalAddCtrl($uibModalInstance, UserService, $rootScope, FlashService) {
        var vm = this;

        vm.save = save;
        vm.cancel = cancel;
//        vm.album = null;

        vm.album = {
            album_name: '',
            artist: '',
            album_year: 0,
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
            if (isNaN(vm.album.album_year)) {
                console.log("year should be a number");
                FlashService.Error("Wrong credential ...");
            } else if (vm.album.album_year === "") {
                vm.album.album_year = 0;
                UserService.addAlbum(vm.album);
                $uibModalInstance.close("Yes");
            } else{
               UserService.addAlbum(vm.album);
               $uibModalInstance.close("Yes"); 
            }
        }

        function cancel() {
            console.log("cancel is clicked.");
            $uibModalInstance.dismiss("No");
        }
    }

})();