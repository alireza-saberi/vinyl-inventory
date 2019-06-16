(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalEditCtrl', ModalEditCtrl);

    ModalEditCtrl.$inject = ['$uibModalInstance', 'editAlbum', 'UserService'];
    function ModalEditCtrl($uibModalInstance, editAlbum, UserService) {
        var vm = this;
        vm.save = save;
        vm.cancel = cancel;
        vm.album = editAlbum;

        initController();

        function initController() {
            console.log("ModalEditCtrl is opened ...");
        }

        function save() {
            if (isNaN(vm.album.album_year)) {
                console.log("year should be a number");
            } else if (vm.album.album_year === "") {
                vm.album.album_year = 0;
                UserService.editAlbum(vm.album).then(function(e){
                    $uibModalInstance.close("Yes");
                });
                
            } else {
                UserService.editAlbum(vm.album).then(function(e){
                    $uibModalInstance.close("Yes");
                });
            }
        }

        function cancel() {
            console.log("cancel is clicked.");
            $uibModalInstance.dismiss("No");
        }
    }

})();