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

function fetchStudentByIdAsync(id) {
  return new Promise((resolve, reject) => {
    if (typeof id !== "string" || id.trim() === "") {
      return reject(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
    }

    setTimeout(() => {
      const student = students.find((s) => s.id === id);
      if (!student) {
        return reject(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
      }
      resolve({ ...student });
    }, 300);
  });
}

//  ดึงทีละคนตามลำดับ (Sequential)
async function reportSequential() {
  const ids = ["6501", "6502", "6503"];
  const start = Date.now();

  for (const id of ids) {
    const student = await fetchStudentByIdAsync(id);
    console.log(`[Sequential] ${student.name} - ${toGrade(student.score)}`);
  }

  const duration = Date.now() - start;
  console.log(`Sequential ใช้เวลา: ${duration} ms`);
  return duration;
}

//  ดึงพร้อมกันแบบขนาน (Parallel)
async function reportParallel(seqDuration) {
  const ids = ["6501", "6502", "6503"];
  const start = Date.now();

  const results = await Promise.all(ids.map((id) => fetchStudentByIdAsync(id)));
  results.forEach((student) => {
    console.log(`[Parallel] ${student.name} - ${toGrade(student.score)}`);
  });

  const duration = Date.now() - start;
  const speedUp = (seqDuration / duration).toFixed(2);
  console.log(`Parallel ใช้เวลา: ${duration} ms (เร็วกว่าเดิม ~${speedUp} เท่า)`);
}

//  จัดการข้อผิดพลาดด้วย try-catch-finally
async function safeReport(id) {
  try {
    const student = await fetchStudentByIdAsync(id);
    console.log(`พบข้อมูล: ${student.name} (เกรด ${toGrade(student.score)})`);
  } catch (error) {
    console.log(`ตรวจไม่พบ: ${error.message}`);
  } finally {
    console.log(`-- จบการตรวจสอบ ${id} --`);
  }
}

async function main() {
  console.log("=== เริ่มการทดสอบ Sequential ===");
  const seqDuration = await reportSequential();

  console.log("\n=== เริ่มการทดสอบ Parallel ===");
  await reportParallel(seqDuration);

  console.log("\n=== ทดสอบ safeReport ===");
  await safeReport("6501");
  await safeReport("9999");
}