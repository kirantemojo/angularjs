define([], function () {

    function part2ViewController($scope, version) {
        $scope.scopedAppVersion = version;
        console.log($scope.scopedAppVersion);
    }

    return part2ViewController;
});