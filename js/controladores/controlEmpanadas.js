miApp.controller("controlEmpanadas",function($scope,$auth,$state,factoryLocal)
{
if($auth.isAuthenticated())
$scope.user = $auth.getPayload();
console.info($scope.user);

})