'use strict';

angular.module('qualityCareApp')
  .controller('DemoCtrl', function ($scope) {
    var i = 0;

    // demo_name.html
    //this.firstName = 'N/A';
    //this.lastName = 'N/A';

    // demo_misc.html
    //this.address = 'N/A';
    //this.city = 'N/A';
    //this.state = 'N/A';
    //this.zip = 'N/A';
    //this.phone = 'N/A';

    // demo_symptoms.html
    this.symptoms = {};
    this.symptomNames = [
      'Other',
      'Bleeding',
      'Bruise',
      'Congestion',
      'Constipation',
      'Cough',
      'Diarrhea',
      'Dizziness',
      'Headaches',
      'Nausea',
      'Numbness',
      'Pain',
      'Sore Throat',
      'Swelling',
      'Wheezing',
    ];
    for (i = 0; i < this.symptomNames.length; i++) {
      var symptomName = this.symptomNames[i];
      this.symptoms[symptomName] = false;
    }

    // demo_relief.html
    this.locations = {};
    this.locationNames = [
      'Other',
      'Abdomen',
      'Back',
      'Chest',
      'Eye',
      'Foot',
      'Hand',
      'Head',
      'Hip',
      'Knee',
      'Neck',
      'Pelvis',
      'Shoulder',
      'Throat',
    ];
    for (i = 0; i < this.locationNames.length; i++) {
      var locationName = this.locationNames[i];
      this.locations[locationName] = false;
    }

    // demo_onset.html
    //this.onsetYear = 'N/A';
    //this.onsetMonth = 'N/A';
    //this.onsetDay = 'N/A';
    //this.onsetHour = 'N/A';
    //this.onsetMinute = 'N/A';
    //this.onsetSecond = 'N/A';

    // demo_descriptions.html
    this.descriptions = {};
    this.descriptionNames = [
      'Other',
      'Annoying',
      'Burning',
      'Cold',
      'Hot',
      'Irritating',
      'Itching',
      'Numb',
      'Puss',
      'Radiating',
      'Sharp',
      'Tender',
    ];
    for (i = 0; i < this.descriptionNames.length; i++) {
      var descriptionName = this.descriptionNames[i];
      this.descriptions[descriptionName] = false;
    }

    // demo_allergies.html
    this.allergies = {};
    this.allergyNames = [
      'Other',
      'Dairy',
      'Eggs',
      'Fish',
      'Peanuts',
      'Seeds',
      'Sesame',
      'Shellfish',
      'Soy',
      'Spices',
      'Treenuts',
      'Wheat',
    ];
    for (i = 0; i < this.allergyNames.length; i++) {
      var allergyName = this.allergyNames[i];
      this.allergies[allergyName] = false;
    }

    // demo_allergies.html
    this.medications = {};
    this.medicationNames = [
      'Acetaminophen',
      'Adderall',
      'Alprazolam',
      'Amitriptyline',
      'Amlodipine',
      'Amoxicillin',
      'Ativan',
      'Atorvastatin',
      'Azithromycin',
      'Ciprofloxacin',
      'Citalopram',
      'Clindamycin',
      'Clonazepam',
      'Codeine',
      'Cyclobenzaprine',
      'Cymbalta',
      'Doxycycline',
      'Gabapentin',
      'Hydrochlorothiazide',
      'Ibuprofen',
      'Lexapro',
      'Lisinopril',
      'Loratadine',
      'Lorazepam',
      'Losartan',
      'Lyrica',
      'Meloxicam',
      'Metformin',
      'Metoprolol',
      'Naproxen',
      'Omeprazole',
      'Oxycodone',
      'Pantoprazole',
      'Prednisone',
      'Tramadol',
      'Trazodone',
      'Wellbutrin',
      'Xanax',
      'Zoloft',
    ];
    for (i = 0; i < this.medicationNames.length; i++) {
      var medicationName = this.medicationNames[i];
      this.medications[medicationName] = false;
    }

    // demo_hazards.html
    this.hazards = {};
    this.hazardNames = [
        'Other',
        'Nothing',
        'Cold',
        'Exercise',
        'Heat',
        'Leaning',
        'Lifting',
        'Lying Down',
        'Medications',
        'Standing',
        'Stress',
        'Smoking',
    ];
    for (i = 0; i < this.hazardNames.length; i++) {
      var hazardName = this.hazardNames[i];
      this.hazards[hazardName] = false;
    }

    // demo_relief.html
    this.reliefs = {};
    this.reliefNames = [
      'Other',
      'Nothing',
      'Coconut Oil',
      'Cold',
      'Epsom Salt',
      'Exercise',
      'Heat',
      'Lying Down',
      'Massage',
      'Movement',
      'Rest',
      'Water',
    ];
    for (i = 0; i < this.reliefNames.length; i++) {
      var reliefName = this.reliefNames[i];
      this.reliefs[reliefName] = false;
    }

      
      $scope.relief = this.reliefs;
      $scope.rkeys = this.reliefNames;
      $scope.colors = {Blue : true, Orange : false};
  });

//function HeaderCtrl($scope) {
//  $scope.header = {name: 'header.html', url: 'header.html'};
//}
