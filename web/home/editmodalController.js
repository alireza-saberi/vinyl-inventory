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
            UserService.editAlbum(vm.album);
            $uibModalInstance.close("Ok");
        }

        function cancel() {
            console.log("cancel is clicked.");
            $uibModalInstance.dismiss();
        }
    }

})();