'use strict';

/**
 * @ngdoc function
 * @name shortlistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shortlistApp
 */
angular.module('shortlistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.showEditAble= [false,true,true,false, false];
    $scope.cityNames = ["Delhi", "Mumbai", "Chandigarh", "Noida", "Gurgaon", "Chennai", "Kolkata"];
    $scope.count = 0;
    $scope.botMsg = ['Hi! What\'s your full name? We\'d love to get to know you', 'Welcome! ', 'What\'s your mobile number?', 'Where do you live?', 'Thank you for your valuable time'];
    localStorage.setItem('username', 'Sumit Mann');
    $scope.username = localStorage.getItem('username');

    $scope.enableEditBox = function(id){
      $scope.showEditAble[id] = !$scope.showEditAble[id];
    }

    $scope.editUsername = function(newName, id){
      localStorage.setItem('username', newName);
      $scope.showEditAble[id] = !$scope.showEditAble[id];
      $scope.username = localStorage.getItem('username');
    }

    $scope.msgList = [
      {
        id:1,
        botClass: 'bot',
        imgPath: 'bot.jpg',
        msgTxt: $scope.botMsg[$scope.count++],
        editable: ''
      }, {
        id:2,
        botClass: '',
        imgPath: 'user.jpg',
        msgTxt: '',
        editable: 'canedit'
      }, {
        id:3,
        botClass: 'bot',
        imgPath: 'bot.jpg',
        msgTxt: $scope.botMsg[$scope.count++] + $scope.username,
        editable: ''
      }, {
        id:4,
        botClass: 'bot',
        imgPath: 'bot.jpg',
        msgTxt: $scope.botMsg[$scope.count++],
        editable: ''
      }];

    $scope.addMsg = function () {
      if ($scope.count == 3) {
        var regex = /^[789]\d{9}$/;
        if (!regex.test($scope.newMsg)) {
          alert('Not a valid mobile number');
          return false;
        }
      } else if ($scope.count >= 5) {
        return false;
      }
      $scope.msgList.push({
        botClass: '',
        imgPath: 'user.jpg',
        msgTxt: $scope.newMsg,
        editable: ''
      }, {
        botClass: 'bot',
        imgPath: 'bot.jpg',
        msgTxt: $scope.botMsg[$scope.count++],
        editable: ''
      });
      $scope.newMsg = '';
      $('.chat_list').animate({scrollTop: $('.chat_list').prop('scrollHeight')}, 300);
    };
  });
