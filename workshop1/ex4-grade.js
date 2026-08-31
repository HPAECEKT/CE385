function toGrade(score) {
  // ตรวจสอบความถูกต้องของข้อมูลนำเข้า (Backend Validation)
  if (score < 0 || score > 100) {
    return "คะแนนไม่ถูกต้อง ต้องอยู่ระหว่าง 0–100 และต้องไม่ตัดเกรดให้";
  }

  // ใช้ if / else if เรียงจากมากไปน้อย
  if (score >= 80) return "A";
  if (score >= 75) return "B+";
  if (score >= 70) return "B";
  if (score >= 65) return "C+";
  if (score >= 60) return "C";
  if (score >= 55) return "D+";
  if (score >= 50) return "D";
  return "F";
}

// ส่วนที่ 1 — แสดงผลตัวอย่างคะแนน 78
const sampleScore = 78;
console.log(`คะแนน ${sampleScore} \u2192 เกรด ${toGrade(sampleScore)}`);

// ส่วนที่ 3 — ทดสอบให้ครบทุกค่าด้วย array และ vòng lặp for...of
const testScores = [95, 80, 79, 75, 70, 65, 60, 55, 50, 49, 0, -5, 120];

console.log("\n--- ผลการทดสอบชุดข้อมูลทั้งหมด ---");
for (const s of testScores) {
  console.log(`คะแนน ${s} \u2192 ${toGrade(s)}`);
}