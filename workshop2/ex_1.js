const GRADE_RULES = [
  { grade: 'A', minScore: 80 },
  { grade: 'B+', minScore: 75 },
  { grade: 'B', minScore: 70 },
  { grade: 'C+', minScore: 65 },
  { grade: 'C', minScore: 60 },
  { grade: 'D+', minScore: 55 },
  { grade: 'D', minScore: 50 },
  { grade: 'F', minScore: 0 }
];

const isValidScore = (score) => typeof score === 'number' && score >= 0 && score <= 100;

function toGrade(score){
  if (!isValidScore(score)) return 'Invalid Score';
  const match = GRADE_RULES.find((rule) => score >= rule.minScore);
  return match ? match.grade : 'F';

}

const calculateWorkshopScore = (raw,full = 60, weight = 20) => (raw /full)*weight;

function calculateTotal(workshop,attendance,project,midterm,final){
  return workshop + attendance + project + midterm + final;
}

const studentsData = [
  { name: 'Somchai', rawWs: 48, att: 10, proj: 18, mid: 22, final: 25 },
  { name: 'Somsri', rawWs: 30, att: 8, proj: 15, mid: 18, final: 12 },
  { name: 'Somsak', rawWs: 58, att: 10, proj: 20, mid: 24, final: 23 }
];

const studentResults = studentsData.map((s) => {
  const wsScore = calculateWoekshopScore(s.rawWs);
  const total = calculateTotal(wsScore, s.att, s.proj, s.mid, s.final);
  return {
    ชื่อ: s.name,
    คะแนนรวม : total.tofixed(2),
    เกรด: toGrade(total)
  };
};

console.table(studentResults);

  console.log('Result 1:', calculateWorkshopScore(48));
console.log('Result 2:', calculateWorkshopScore(48, 60, 20));
console.log('Result 3 (with undefined full):', calculateWorkshopScore(48, undefined, 25));