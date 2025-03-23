function schoolRegister(input) {
    let students = {};

    input.forEach((line) => {
        let name = line.split(', ')[0].split(': ')[1]; // Extracting the student name
        let grade = parseInt(line.split(', ')[1].split(': ')[1]); // Extracting the grade and converting to number
        let score = parseFloat(line.split(', ')[2].split(': ')[1]); // Extracting the score and converting to float

        // Only process students who have passed (score >= 3)
        if (score >= 3) {
            grade++; // Increment the grade (move to the next grade)

            // Initialize grade in the students object if not already present
            if (!students[grade]) {
                students[grade] = { names: [], scores: [] };
            }

            // Add the student name and score
            students[grade].names.push(name);
            students[grade].scores.push(score);
        }
    });
    
    let sortedGrades = Object.keys(students).sort((a, b) => a - b); // Sort the grades

    // Output the result for each grade
    sortedGrades.forEach((grade) => {
        let studentNames = students[grade].names.join(', ');
        let averageScore = students[grade].scores.reduce((acc, curr) => acc + curr, 0) / students[grade].scores.length;

        console.log(`${grade} Grade`);
        console.log(`List of students: ${studentNames}`);
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        console.log();
    });
}