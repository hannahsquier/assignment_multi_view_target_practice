var app = angular.module("TargetPractice", ["ui.router"])

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory("_", [ "$window", function($window) {
  return $window._;
}])

app.config( function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');


  $stateProvider.state("parent", {
    url: "/",

    views: {
      '@': {
        template: "Targeting unnamed view from parent state",
      },

      "named-parent@": {
        template: "Targeting named view from parent state"
      },

      "main-header@": {
        template: 'Targeting header from parent state'
      }
    }
  })
})