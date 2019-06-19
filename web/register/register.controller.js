(function () {
    'use strict';

    angular
            .module('app')
            .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function RegisterController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        console.log("RegisterController ... ");

        function register() {
            vm.dataLoading = true;
            console.log("user is %o", vm.user);
            UserService.create(vm.user)
                    .then(function (response) {
                        console.log(response);
                        if (response) {
                            FlashService.Success('Registration successful', true);
                            $location.path('/login');
                        } else {
                            FlashService.Error(response.message);
                            vm.dataLoading = false;
                        }
                    });
        }
    }

})();
