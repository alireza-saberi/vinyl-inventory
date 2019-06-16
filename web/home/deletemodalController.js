(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalDeleteCtrl', ModalDeleteCtrl);

    ModalDeleteCtrl.$inject = ['$uibModalInstance', 'delAlbum', 'UserService'];
    function ModalDeleteCtrl($uibModalInstance, delAlbum, UserService) {
        var vm = this;

        vm.deleteAlbum = deleteAlbum;
        vm.cancel = cancel;
        vm.albumName = delAlbum.album_name;

        initController();

        function initController() {
            console.log("ModalDeleteCtrl is opened to delete %o...", delAlbum);
        }

        function cancel() {
            $uibModalInstance.dismiss("No");
        }

        function deleteAlbum() {
            UserService.deleteAlbum(delAlbum).then(function(e){
                $uibModalInstance.close("Yes");
            });
            
        }
    }

})();