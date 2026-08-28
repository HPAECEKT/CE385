// ส่วนที่ 1 — สร้างตัวแปรเก็บคะแนนดิบ
const workshopRaw = 48; // คะแนนเต็ม 60
const attendance = 9;
const project = 17;
const midterm = 15;
const final = 24;

// ส่วนที่ 2 — ค่าคงที่เกณฑ์การให้คะแนนและคำนวณ
const WORKSHOP_MAX_RAW = 60;
const WORKSHOP_TARGET_WEIGHT = 20;
const TOTAL_MAX_SCORE = 100;
const TARGET_SCORE = 80;

// แปลงคะแนน Workshop ตามสัดส่วนของวิชา: (คะแนนดิบ ÷ 60) × 20
const convertedWorkshop = (workshopRaw / WORKSHOP_MAX_RAW) * WORKSHOP_TARGET_WEIGHT;

// คำนวณคะแนนรวมทั้งหมด
const totalScore = convertedWorkshop + attendance + project + midterm + final;

// คำนวณเปอร์เซ็นต์จากคะแนนเต็ม 100 (เนื่องจากคะแนนรวมเต็ม 100 อยู่แล้ว)
const scorePercentage = (totalScore / TOTAL_MAX_SCORE) * 100;

// คำนวณว่ายังขาดอีกกี่คะแนนจึงจะได้ 80 คะแนน
const scoreDifference = TARGET_SCORE - totalScore;

// ส่วนที่ 3 — แสดงผลเป็นใบสรุปคะแนน
console.log(`===== ใบสรุปคะแนนวิชา CE385 =====`);
console.log(`คะแนน Workshop (แปลงแล้ว) : ${convertedWorkshop.toFixed(2)} / 20`);
console.log(`คะแนนเข้าเรียน              : ${attendance} / 10`);
console.log(`คะแนนโปรเจกต์             : ${project} / 20`);
console.log(`คะแนนสอบกลางภาค         : ${midterm} / 20`);
console.log(`คะแนนสอบปลายภาค         : ${final} / 30`);
console.log(`---------------------------------`);
console.log(`คะแนนรวมทั้งหมด           : ${totalScore.toFixed(2)} / 100`);
console.log(`คิดเป็นเปอร์เซ็นต์            : ${scorePercentage.toFixed(2)}%`);
console.log(`คะแนนที่ยังขาดเพื่อให้ถึง 80   : ${scoreDifference.toFixed(2)} คะแนน`);
console.log(`=================================`);