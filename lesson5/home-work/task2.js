let averageGrade = 70.4
let averageGradeRound = Math.round(averageGrade)

switch (true) {
    case averageGradeRound < 60:
        console.log("Unsatisfactory");
        break;
    case averageGradeRound >= 60 && averageGradeRound <= 70:
        console.log("Satisfactory");
        break;
    case averageGradeRound >= 71 && averageGradeRound <= 80:
        console.log("Good");
        break;
    case averageGradeRound >= 81 && averageGradeRound <= 90:
        console.log("Very Good");
        break;
    case averageGradeRound >= 91 && averageGradeRound <= 100:
        console.log("Excellent");
        break;
    default:
        console.log("Invalid grade");
        break;
}



