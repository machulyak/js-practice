let averageGrade = 90.4
let averageGradeRound = Math.round(averageGrade)

if (averageGradeRound < 60) {
    console.log("Unsatisfactory");
} else if (averageGradeRound >= 60 && averageGradeRound <= 70) {
    console.log("Satisfactory");
} else if (averageGradeRound >= 71 && averageGradeRound <= 80) {
    console.log("Good");
} else if (averageGradeRound >= 81 && averageGradeRound <= 90) {
    console.log("Very Good");
} else if (averageGradeRound >= 91 && averageGradeRound <= 100) {
    console.log("Excellent");
} else {
    console.log("Invalid grade");
}