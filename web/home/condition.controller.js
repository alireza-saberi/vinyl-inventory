(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalConditionCtrl', ModalConditionCtrl);

    ModalConditionCtrl.$inject = ['$uibModalInstance', 'UserService'];
    function ModalConditionCtrl($uibModalInstance, UserService) {
        var vm = this;

        vm.ok = ok;
        vm.conditions = [];

        initController();

        function initController() {
            loadCondition();
        }

        function ok() {
            console.log("Save is clicked.");
            $uibModalInstance.close("ok");
        }

        function loadCondition() {
            UserService.albumConditions()
                    .then(function (conds) {
                        vm.conditions = conds;
                    });
        }

    }

})();

