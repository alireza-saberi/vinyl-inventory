(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalContentCtrl', ModalContentCtrl);

    ModalContentCtrl.$inject = ['$uibModalInstance'];
    function ModalContentCtrl($uibModalInstance) {
        var vm = this;

        vm.ok = ok;
        vm.cancel = cancel;

        initController();

        function initController() {
            console.log("ModalContentCtrl is opened ..");
            cancel();
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



