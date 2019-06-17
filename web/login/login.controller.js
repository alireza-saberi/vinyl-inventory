(function () {
    'use strict';

    angular
            .module('app')
            .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (Object.keys(response.data).length) {
                    AuthenticationService.SetCredentials(vm.username, vm.password, response.data.first_name, response.data.last_name);
                    $location.path('/');
                } else {
                    FlashService.Error("Wrong credential ...");
                    vm.dataLoading = false;
                }
            });
        }
        ;
    }

})();
