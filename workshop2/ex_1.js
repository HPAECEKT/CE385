// โครงสร้างเกรดสำหรับอ้างอิง
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

// ส่วนที่ 1 — นิยามฟังก์ชัน (ใช้ Arrow Function)
const isValidScore = (score) => typeof score === 'number' && score >= 0 && score <= 100;

function toGrade(score) {
  if (!isValidScore(score)) return 'Invalid Score';
  const match = GRADE_RULES.find((rule) => score >= rule.minScore);
  return match ? match.grade : 'F';
}

const calculateWorkshopScore = (raw, full = 60, weight = 20) => (raw / full) * weight;

function calculateTotal(workshop, attendance, project, midterm, final) {
  return workshop + attendance + project + midterm + final;
}

// ส่วนที่ 2 — ทดสอบสร้างข้อมูลนักศึกษา 3 คน และแสดงผลเป็นตาราง
const studentsData = [
  { name: 'Somchai', rawWs: 48, att: 10, proj: 18, mid: 22, final: 25 },
  { name: 'Somsri', rawWs: 30, att: 8, proj: 15, mid: 18, final: 12 },
  { name: 'Somsak', rawWs: 58, att: 10, proj: 20, mid: 24, final: 23 }
];

const studentResults = studentsData.map((s) => {
  const wsScore = calculateWorkshopScore(s.rawWs);
  const total = calculateTotal(wsScore, s.att, s.proj, s.mid, s.final);
  return {
    ชื่อ: s.name,
    คะแนนรวม: total.toFixed(2),
    เกรด: toGrade(total)
  };
});

console.table(studentResults);

// ส่วนที่ 3 — พิสูจน์ค่าเริ่มต้น (Default Parameters)
console.log('Result 1:', calculateWorkshopScore(48)); // 16
console.log('Result 2:', calculateWorkshopScore(48, 60, 20)); // 16

// การส่ง undefined ในตำแหน่งพารามิเตอร์จะทำให้ JavaScript ใช้ค่า default parameter ที่กำหนดไว้ (full = 60)
// ผลลัพธ์ที่ได้จึงคิดจาก (48 / 60) * 25 = 20
console.log('Result 3 (with undefined full):', calculateWorkshopScore(48, undefined, 25)); // 20