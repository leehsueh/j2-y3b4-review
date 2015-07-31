function MVCtrl($scope) {
	$scope.verses = memoryVerses;
	$scope.selectedVerse = null;
	$scope.setSelectedVerse = function (verse) {
		$(".reveal-modal-bg").remove();	// need this because modal dialogs are contained within tab
		$scope.selectedVerse = verse;
	}
	$scope.toggleAnswers = function () {
		$("span.w").toggleClass("show");
	}
}

function RandomCtrl($scope) {
	$scope.students = ["Ruth", "Victoria", "Ben", "Austin"]
	$scope.selectedStudent = function() {

	}
}

function JeopardyCtrl($scope) {
	var TIME_LIMIT = 30;	// 15 seconds
	$scope.timeLeft = TIME_LIMIT;
	$scope.countDown = false;
	$scope.intervalID = null;
	$scope.categories = categories;
	$scope.questions = questions;

	$scope.setSelectedQuestion = function(question) {
		$scope.selectedQuestion = question;
		question.covered = true;
		$scope.resetQuestion()
	}
	$scope.toggleCountDown = function () {
		if ($scope.countDown) {
			clearInterval($scope.intervalID);
		} else {
			$scope.intervalID = setInterval(function () { 
				$scope.$apply(function () {
					if ($scope.timeLeft > 0) $scope.timeLeft -= 1;
					else clearInterval($scope.intervalID);
				})
			}, 1000);	
		}
		$scope.countDown = !$scope.countDown;
	}
	$scope.addTime = function () {
		if ($scope.countDown) {
			$scope.toggleCountDown();	// stop temporarily
			$scope.timeLeft += TIME_LIMIT;
			$scope.toggleCountDown();	// resume countdown
		}
	}

	$scope.resetQuestion = function () {
		$(".reveal-modal-bg").remove();
		$scope.showAnswers = false;
		$scope.countDown = false;
		$scope.selectedQuestion.covered = true;
		clearInterval($scope.intervalID);
		$scope.timeLeft = TIME_LIMIT;

		// start countdown automatically
		$scope.toggleCountDown();
	}

	$scope.points = 0;
	$scope.incrementPoints = function (inc) {
		$scope.points += inc;
	}

	$scope.points2 = 0;
	$scope.incrementPoints2 = function (inc) {
		$scope.points2 += inc;
	}

	// if a question has been revealed, mark it as covered
	$scope.coveredClass = function (obj) {
		if (obj.covered) {
			return "covered";
		} else {
			return null;
		}
	}

	$scope.answerClasses = function () {
		var classes = ["answer"];
		if ($scope.answerShowing) classes.push("show");
		return classes;
	}

}