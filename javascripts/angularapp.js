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

function LetterCtrl($scope) {
	$scope.letterToGroupMap = letterToGroupMap;
	$scope.lettersBibleOrder = lettersBibleOrder;
	$scope.bibleOrderIndex = 0;
	$scope.incrementBibleOrder = function (inc) {
		$scope.bibleOrderIndex += inc;
	}
	$scope.showAllBibleOrder = function () {
		$scope.bibleOrderIndex = $scope.lettersBibleOrder.length;
	}
	$scope.hideAllBibleOrder = function () {
		$scope.bibleOrderIndex = 0;
	}
	$scope.lettersChronoOrder = lettersChronoOrder;
	$scope.chronoOrderIndex = 0;
	$scope.incrementChronoOrder = function (inc) {
		$scope.chronoOrderIndex += inc;
		if ($scope.chronoOrderIndex > $scope.lettersChronoOrder.length) $scope.chronoOrderIndex = $scope.lettersChronoOrder.length;
		if ($scope.chronoOrderIndex < 0) $scope.chronoOrderIndex = 0;
	}
	$scope.showAllChronoOrder = function () {
		$scope.chronoOrderIndex = $scope.lettersChronoOrder.length;
	}
	$scope.hideAllChronoOrder = function () {
		$scope.chronoOrderIndex = 0;
	}
}

function JeopardyCtrl($scope) {
	var TIME_LIMIT = 15;	// 15 seconds
	$scope.timeLeft = TIME_LIMIT;
	$scope.countDown = false;
	$scope.intervalID = null;
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
		$scope.bookShowing = false;
		$scope.countDown = false;
		clearInterval($scope.intervalID);
		$scope.timeLeft = TIME_LIMIT;

		// start countdown automatically
		$scope.toggleCountDown();
	}

	$scope.points = 0;
	$scope.incrementPoints = function (inc) {
		$scope.points += inc;
	}

	$scope.letterBackgrounds = _.shuffle(letterBackgrounds);
	$scope.keyphrases = _.shuffle(keyphrases);
	// show book answer state
	$scope.bookShowing = false;

	$scope.selectedLetter = null;
	$scope.setSelectedLetter = function (letter) {
		letter.covered = true;
		$scope.resetQuestion();
		$scope.selectedLetter = letter;
	}
	$scope.selectedKeyphrase = null;
	$scope.setSelectedKeyphrase = function (keyphrase) {
		keyphrase.covered = true;
		$scope.resetQuestion();
		$scope.selectedKeyphrase = keyphrase;
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
		if ($scope.bookShowing) classes.push("show");
		return classes;
	}
	$scope.showBook = function () {
		$scope.bookShowing = !$scope.bookShowing;
	}

}