'use strict';

let angular = require('angular');

require('./instanceArchetype.html');

module.exports = angular.module('spinnaker.serverGroup.configure.gce.instanceArchetypeCtrl', [])
  .controller('gceInstanceArchetypeCtrl', function($scope, instanceTypeService, modalWizardService) {

    var wizard = modalWizardService.getWizard();

    $scope.$watch('command.viewState.instanceProfile', function() {
      if ($scope.command.viewState.instanceProfile === 'custom') {
        wizard.excludePage('instance-type');
      } else {
        wizard.includePage('instance-type');
        wizard.markClean('instance-profile');
        wizard.markComplete('instance-profile');
      }
    });

    $scope.$watch('command.viewState.instanceType', function(newVal) {
      if (newVal) {
        wizard.markClean('instance-profile');
        wizard.markComplete('instance-profile');
      }
    });

  }).name;
