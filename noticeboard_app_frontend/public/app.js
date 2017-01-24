var app = angular.module('noticeboard', []);

app.controller('mainController', ['$http', function($http) {

  this.message = "controller works";
  this.notices = [];
  this.formdata = {};

  $http({
    method: 'GET',
    url: 'http://localhost:3000/notices'
  }).then(function(response) {
    console.log(response);
    this.notices = response.data;

    console.log(this.notices);

  }.bind(this));

  this.processForm = function() {
    console.log('processForm function . . .');
    console.log('Formdata: ', this.formdata);

    $http({
      method: 'POST',
      url: 'http://localhost:3000/notices',
      data: this.formdata
    }).then(function(result){
      console.log('data from server: ', result);
      this.formdata = {};
      this.notices.unshift(result.data);
    }.bind(this));
  } //end processForm

}]);
