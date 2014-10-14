angular.module('perfApp').controller('menuController', function(
  $scope
){
  $scope.menuOptions = [
    {name: "Start", path: '/'}
    ,{name: "Show/Hide", path: '/show-hide'}

  ];
  $scope.selectOption = selectOption;
  selectOption(0);


  function selectOption(index){
    $scope.selectedOption = $scope.menuOptions[index];
  }

});