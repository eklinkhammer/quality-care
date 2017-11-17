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
	    .when('/demo/name', {
		templateUrl: 'views/demo_name.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/misc', {
		templateUrl: 'views/demo_misc.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/symptoms', {
		templateUrl: 'views/demo_symptoms.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/locations', {
		templateUrl: 'views/demo_locations.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/onset', {
		templateUrl: 'views/demo_onset.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/description', {
		templateUrl: 'views/demo_description.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/allergies', {
		templateUrl: 'views/demo_allergies.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/medications', {
		templateUrl: 'views/demo_medications.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/hazards', {
		templateUrl: 'views/demo_hazards.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/relief', {
		templateUrl: 'views/demo_relief.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/demo/end', {
		templateUrl: 'views/demo_end.html',
		controller: 'DemoCtrl',
		controllerAs: 'demo'
	    })
	    .when('/about', {
		templateUrl: 'views/about.html',
		controller: 'AboutCtrl',
		controllerAs: 'about'
	    })
	    .otherwise({
		redirectTo: '/'
	    });
    });

/*
  All code that will be loaded for header / on all pages
*/

// In nav bar, only most recently selected item is highlighted
$('.nav a').on('click', function() {
  $('.nav').find('.active').removeClass('active');
  $(this).parent().addClass('active');
});
