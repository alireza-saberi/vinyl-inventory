(function () {
    'use strict';

    angular
            .module('app')
            .controller('ModalEditCtrl', ModalEditCtrl);

    ModalEditCtrl.$inject = ['$uibModalInstance', 'editAlbum'];
    function ModalEditCtrl($uibModalInstance, editAlbum) {
        var vm = this;

        vm.ok = ok;
        vm.cancel = cancel;

//        vm.album = {
//            albumName : editAlbum.album_name,
//            artist : editAlbum.artist,
//            album_year : editAlbum.album_year,
//            album_condition : editAlbum.album_condition,
//            upc : editAlbum.upc,
//            note : editAlbum.note,
//            album_id : editAlbum.album_id,
//            username : editAlbum.username
//        }

    vm.album = editAlbum;

    initController();

    function initController() {
        console.log("ModalEditCtrl is opened ..");
        console.log("editAlbum is %o", editAlbum);
        console.log("vm.album is %o", vm.album);
//        vm.album.albumName = 
//        vm.album.artist
//        vm.album.album_year
//        vm.album.album_condition
//        vm.album.upc
//        vm.album.note
//        vm.album.album_id
//        vm.album.username
        
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