define([], function () {

    function part1ViewController($scope, version) {
        $scope.scopedAppVersion = version;
        console.log($scope.scopedAppVersion);
    }

    return part1ViewController;
});