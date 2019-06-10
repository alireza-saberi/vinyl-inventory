(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalAddCtrl', ModalAddCtrl);

    ModalAddCtrl.$inject = ['$uibModalInstance'];
    function ModalAddCtrl($uibModalInstance) {
        var vm = this;

        vm.save = save;
        vm.cancel = cancel;
        
        vm.album = {
            album_name: '',
            artist: '',
            album_year:'',
            album_condition:'',
            note:'',
            upc: ''
        };

        initController();

        function initController() {
            console.log("ModalAddCtrl is opened ..");
        }

        function save() {
            console.log("Save is clicked.");
            $uibModalInstance.close(vm.album);
        }

        function cancel() {
            console.log("cancel is clicked.");
            $uibModalInstance.dismiss();
        }
    }

})();