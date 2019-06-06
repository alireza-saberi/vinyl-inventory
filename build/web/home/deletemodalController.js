(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalContentCtrl', ModalContentCtrl);
    
    ModalContentCtrl.$inject = ['$scope', '$uibModalInstance'];
    function ModalContentCtrl($scope, $uibModalInstance) {
        var vm = this;
        vm.ok = ok
        vm.cancel = cancel;
        
        initController();

        function initController() {
            console.log("ModalContentCtrl is opened ..");
        }
        
        function ok(){
           $uibModalInstance.close("Ok"); 
        }
        
        function cancel(){
            $uibModalInstance.dismiss();
        }
    }
    
    })();
        


