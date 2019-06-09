(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalEditCtrl', ModalEditCtrl);

    ModalEditCtrl.$inject = ['$uibModalInstance'];
    function ModalEditCtrl($uibModalInstance) {
        var vm = this;

        vm.ok = ok;
        vm.cancel = cancel;

        initController();

        function initController() {
            console.log("ModalEditCtrl is opened ..");
        }

        function ok() {
            console.log("ok is clicked.");
            $uibModalInstance.close("Ok");
        }

        function cancel() {
            console.log("cancel is clicked.");
            $uibModalInstance.dismiss();
        }
    }

})();