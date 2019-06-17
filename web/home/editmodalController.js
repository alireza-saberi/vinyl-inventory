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
                UserService.editAlbum(vm.album)
                        .then(function (e) {
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