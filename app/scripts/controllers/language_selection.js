'use strict';

angular.module('qualityCareApp')
  .controller('LanguageSelectionCtrl', function () {
    this.language = 'N/A';
    this.languageOptions = [
      'English',
    ];
  });
