var username = prompt('Enter username')

var score = 0 //our score
var correctAnswers = 0 //correct answers
// Questions
var questions = ['What is the study of insects called ?', 'What was the name of party formed by Hitler in 1933 ?', 'Who is the founder of Pakistan', 'Which city was called the city of lights', 'FFC stands for ?', 'Who developed telescope', 'What is the name of the largest mountain ?', 'Which is the largest waterfall ?', 'Which is the longest river ?', 'What is the national animal of New Zealand?']
// Answers
var answers = ['entomology', 'nazi party', 'ispr', 'karachi', 'film finance corporation', 'galileo', 'mount everest', 'niagra', 'nile', 'kiwi']
for (var i = 0; i < questions.length; i++) {
    var ans = prompt(questions[i]);
    if (ans.toLowerCase() == answers[i]) {
        ++score
        ++correctAnswers
    } else {
        --score
    }
}

// Calculation of Percentage
var percentage = score/questions.length * 100
console.log(percentage);

var grade = 'Fail';

if(percentage >= 60){
 grade = 'Pass';
}

console.log('Result of '+username, 'Grade: '+grade+', Percentage : '+percentage+', No. of correct answers: '+correctAnswers);

