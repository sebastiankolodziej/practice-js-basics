

function Student(initFirstNameVal, initLastNameVal) {
    this.firstName = initFirstNameVal;
    this.lastName = initLastNameVal;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
        this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}

const student = new Student('Ala', 'Kotowicz');
student.addGrade('math', 4);
student.addGrade('math', 6);
student.addGrade('english', 3);



Student.prototype.getAverageGrade = function(subject) {
    if(typeof subject === 'undefined') {
        const grades = [];
        for(const grad in this.grades) {
            const arr = this.grades[grad];

            arr.forEach(function(item) {
                grades.push(item);
            });
        }

        if(grades.length === 0) {
            return 0;
        }

        const sum = grades.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
        }, 0);
        
        return sum / grades.length;
    }
    
    
    if(typeof this.grades[subject] === 'undefined') {
        return 0;
    }
    const grades = this.grades[subject];
    const sum = grades.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);
    
    return sum / grades.length;
}

console.log(student.getAverageGrade('math'));
