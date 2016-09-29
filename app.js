var app = angular.module("TargetPractice", ["ui.router"])

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory()