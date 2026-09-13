const students = [
  { id: "6501", name: "Somchai", major: "CE", score: 85 },
  { id: "6502", name: "Somsri", major: "IT", score: 72 },
  { id: "6503", name: "Anan", major: "LE", score: 64 },
  { id: "6504", name: "Kanya", major: "AE", score: 90 },
];

function toGrade(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}