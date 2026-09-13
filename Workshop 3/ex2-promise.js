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

//แปลงเป็น Promise
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

//เรียกใช้ 3 กรณีด้วย .then / .catch / .finally
fetchStudentByIdAsync("6501")
  .then((student) => console.log("[Promise Case 1] พบข้อมูล:", student))
  .catch((err) => console.error("[Promise Case 1] ผิดพลาด:", err.message))
  .finally(() => console.log("[Promise Case 1] เสร็จสิ้นการทำงาน"));

fetchStudentByIdAsync("9999")
  .then((student) => console.log("[Promise Case 2] พบข้อมูล:", student))
  .catch((err) => console.error("[Promise Case 2] ผิดพลาด:", err.message))
  .finally(() => console.log("[Promise Case 2] เสร็จสิ้นการทำงาน"));

fetchStudentByIdAsync(42)
  .then((student) => console.log("[Promise Case 3] พบข้อมูล:", student))
  .catch((err) => console.error("[Promise Case 3] ผิดพลาด:", err.message))
  .finally(() => console.log("[Promise Case 3] เสร็จสิ้นการทำงาน"));

// Promise Chaining 3 ขั้น
fetchStudentByIdAsync("6501")
  .then((student) => {
    return { name: student.name, grade: toGrade(student.score) };
  })
  .then((reportObj) => {
    return `นักศึกษา: ${reportObj.name} ได้เกรด: ${reportObj.grade}`;
  })
  .then((message) => {
    console.log("[Promise Chain]", message);
  })
  .catch((err) => {
    console.error("[Promise Chain Error]", err.message);
  });
// ฟังก์ชัน promisify เอนกประสงค์
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  };
}

// ทดสอบ promisify กับฟังก์ชันตัวอย่างอื่น
function calculateDiscount(price, callback) {
  setTimeout(() => {
    if (typeof price !== "number" || price < 0) {
      return callback(new Error("ราคาไม่ถูกต้อง"));
    }
    callback(null, price * 0.9);
  }, 100);
}