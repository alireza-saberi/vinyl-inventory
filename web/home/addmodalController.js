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
        vm.upc = upc;
        vm.album = null;

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
            
            if (vm.album.album_condition === null){
                vm.album.album_condition = '-';
            }
            if (vm.album.album_year === "" || vm.album.album_year === null){
                vm.album.album_year = 0;
            }
            
            // avoiding from empty name, nan year to be submitted
            if(vm.album.album_name !== "" && vm.album.album_name !== null && !isNaN(vm.album.album_year)) {
                console.log("Trying to save %o", vm.album);
                UserService.addAlbum(vm.album)
                        .then(function (e) {
                            $uibModalInstance.close("Yes");
                        });
            }
        }

        function cancel() {
            console.log("cancel is clicked.");
            $uibModalInstance.dismiss("No");
        }

        function upc(upcNo) {
            console.log("ups is called ... %o", upcNo);
            UserService.getByUpc(upcNo).then(function (e) {
                vm.album.album_name = e.AlbumName;
                vm.album.artist = e.Artist;
                vm.album.album_year = e.PressingYear;
            });
        }
    }

})();