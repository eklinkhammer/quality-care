'use strict';

/**
 * @ngdoc overview
 * @name qualityCareApp
 * @description
 * # qualityCareApp
 *
 * Main module of the application.
 */
angular
    .module('qualityCareApp', [
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch',
    ])
    .config(function ($routeProvider) {
	$routeProvider
	    .when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	    })
	    .when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl',
		controllerAs: 'about'
	    })
	    .when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'ContactCtrl',
		controllerAs: 'contact'
	    })
	    .when('/language', {
		templateUrl: 'views/language_selection.html',
		controller: 'LanguageSelectionCtrl',
		controllerAs: 'language_selection'
	    })
	    .when('/personal', {
		templateUrl: 'views/personal_info.html',
		controller: 'PersonalInfoCtrl',
		controllerAs: 'personal_info'
	    })
	    .when('/medical', {
		templateUrl: 'views/medical_history.html',
		controller: 'MedicalHistoryCtrl',
		controllerAs: 'medical_history'
	    })
	    .when('/privacy', {
		templateUrl: 'views/privacy.html',
		controller: 'PrivacyCtrl',
		controllerAs: 'privacy'
	    })
	    .otherwise({
		redirectTo: '/'
	    });
    });

/*
  All code that will be loaded for header / on all pages
*/

// In nav bar, only most recently selected item is highlighted
$(".nav a").on("click", function() {
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});
