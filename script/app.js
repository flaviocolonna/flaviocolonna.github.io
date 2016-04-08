var app = angular.module("mailApp", []);
app.controller('ContactController', function($scope, $http) {

	$scope.message = 'hidden';

	$scope.resultMessage;

	$scope.formData = {};
	//è un array nel quale sono contenute le informazioni della mail

	$scope.submitButtonDisabled = false;

	$scope.submitted = false;
	//used so that form errors are shown only after the form has been submitted

	$scope.submit = function() {

		$scope.submitted = true;

		$scope.submitButtonDisabled = true;

		$http({

			method : 'POST',

			url : 'mail2.php',

			data : $.param($scope.formData), //param method from jQuery

			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			} //set the headers so angular passing info as form data (not request payload)

		}).success(function(data) {
			if (data.success) {
				$scope.submitButtonDisabled = true;

				$scope.resultMessage = data.message;

				$scope.message = 'bg-success';

				Materialize.toast('Message sent!', 3000, 'rounded')
			} else {

				$scope.submitButtonDisabled = false;

				$scope.resultMessage = data.message;

				$scope.message = 'bg-danger';

				Materialize.toast('Message not sent!', 3000, 'rounded')
			}

		});

	};
});
