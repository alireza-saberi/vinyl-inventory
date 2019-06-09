(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalAddCtrl', ModalAddCtrl);

    ModalAddCtrl.$inject = ['$uibModalInstance'];
    function ModalAddCtrl($uibModalInstance) {
        var vm = this;

        vm.ok = ok;
        vm.cancel = cancel;

        initController();

        function initController() {
            console.log("ModalDeleteCtrl is opened ..");
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