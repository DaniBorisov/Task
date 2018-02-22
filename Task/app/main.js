
(function () {
   

    'use strict';

    angular
        .module('app')
        .controller('Main', main);
    getData(user) {
        var apiKey= "93bcfc1e220302d0402898ef74fce279";
        return this.$q.all({
            userInfo: this.$http.get(this.rootUrl + '?method=user.getinfo&user=' + user + '&api_key=' + this.apiKey + '&format=json'),
            userTopArtists: this.$http.get(this.rootUrl + '?method=user.gettoptracks&user=' + user + '&api_key=' + this.apiKey + '&format=json')
        }).then(resp => {
            return resp;
        }).catch(err => {
            this.$q.reject('Error' + err.status);
        })
    }

    function main() {
        var vm = this;
        vm.food = 'pizza';
    }

})();