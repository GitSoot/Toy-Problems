# Student Grade Generator (Toy Problem Solution)

*Below is a grade generator for student scores*
## JavaScript Solution
With basic conditional statements, students and their teachs obtain grades based on their response to the user prompt. 

`let score = prompt ('Enter your score to know your grade.')`

User input feeds to the 'getGrade' function: 

`function getGrade(score) {
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
    } else if (score < 40) {
      letter = 'F';
    } else {
        letter = 'Invalid Score. Try Again'
    }
    return letter;
  };`

Based on user input, our final code block generates the student grade. 

`let grade = getGrade;
  getGrade(score)`
