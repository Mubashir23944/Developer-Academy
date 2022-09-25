// -----------------------------------Q1-------------------------
//Q1A
var students = ['Ali', 'Faizan', 'Sami', 'Saad']; 

//Q1B
var obtainedMarks = [100, 200, 300, 400]; 

//Q1C
var totalMarks = 500; 

// Q1D
console.log('Score of ' + students[0] + ' is ' + obtainedMarks[0] + '. The percentage is ' + (obtainedMarks[0] / totalMarks * 100) + '. The grade is ' + gradeCalculator(obtainedMarks[0]))
console.log('Score of ' + students[1] + ' is ' + obtainedMarks[1] + '. The percentage is ' + (obtainedMarks[1] / totalMarks * 100) + '. The grade is ' + gradeCalculator(obtainedMarks[1]))
console.log('Score of ' + students[2] + ' is ' + obtainedMarks[2] + '. The percentage is ' + (obtainedMarks[2] / totalMarks * 100) + '. The grade is ' + gradeCalculator(obtainedMarks[2]))
console.log('Score of ' + students[3] + ' is ' + obtainedMarks[3] + '. The percentage is ' + (obtainedMarks[3] / totalMarks * 100) + '. The grade is ' + gradeCalculator(obtainedMarks[3]))


function gradeCalculator(obtainedMarks) { //Function for grade calculation
    if (obtainedMarks / totalMarks * 100 >= 60) return 'Pass'
    return 'fail'
}


// -----------------------------------Q2-------------------------
//Q2A
var colors = ['red', 'yellow', 'pink', 'purple', 'orange', 'blue']
console.log('Default', colors);

// Q2B
var userColor = prompt('Enter Color that you wish to add at the begining')
colors.unshift(userColor);
console.log('First Color inserted', colors);

//Q2C
var userColor = prompt('Enter Color that you wish to add at the end')
colors.push(userColor);
console.log('Last Color inserted', colors);

//Q2D
colors.unshift('black', 'beige');
console.log('Two colors at the begining', colors);

//Q2E
colors.push('brown', 'indigo');
console.log('Two colors at the adsend', colors);

// Q2F
colors.shift()
console.log('First Color Deleted', colors);

// Q2G
colors.pop()
console.log('Last Color Deleted', colors);

// Q2H
var colorIndex = prompt('Enter color index you which you wish to update')
var colorRequest = prompt('Name the color')

colors[parseInt(colorIndex) - 1] = colorRequest //Updating the color at user's provided index
console.log('Updated on User demand', colors);

// Q2I
var startIndex = prompt('Mention index to start deleting color') //starting point
var endIndex = prompt('Mention index to end deleting color') //ending point

colors.splice(parseInt(startIndex)-1, parseInt(endIndex)-1) //Removing color using range input by user
console.log('Updated on User demand', colors);


// ------------------------------Q3-----------------------
var number = prompt('Enter number to display the multiplication table')
for (var i = 1; i <= 10; i++) {
    console.log(number + ' x ' + i + ' = ' + number*i5);
}