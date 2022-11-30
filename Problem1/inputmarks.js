//User prompt for score
let score = prompt ('Enter your score to know your grade.')
//Grade function
function getGrade(score) {
    let letter;
    if (score >= 79 && score <= 100) {
      letter = 'A';
    } else if (score >= 60 && score <= 79) {
      letter = 'B';
      return letter;
    } else if (score >= 49 && score <= 59) {
      letter = 'C';
    } else if (score >= 40 && score <= 49) {
      letter = 'D';
    } else if (score < 40 && score >= 1) {
      letter = 'F';
    } else {
        letter = 'Invalid Score. Try Again'
    }
    return letter;
  };

  let grade = getGrade;
  getGrade(score)