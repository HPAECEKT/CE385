const students = [
  { id: "6501", name: "Somchai", major: "CE", score: 85 },
  { id: "6502", name: "Somsri", major: "IT", score: 72 },
  { id: "6503", name: "Anan", major: "LE", score: 64 },
  { id: "6504", name: "Kanya", major: "AE", score: 90 },
];

// ฟังก์ชันค้นหานักศึกษาด้วย Error-first Callback
function fetchStudentById(id, callback) {
  if (typeof id !== "string" || id.trim() === "") {
    return callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"));
  }

  setTimeout(() => {
    const student = students.find((s) => s.id === id);
    if (!student) {
      return callback(new Error(`ไม่พบรหัสนักศึกษา ${id}`));
    }
    return callback(null, { ...student });
  }, 300);
}

// ทดสอบเรียกใช้งานทั้ง 3 กรณี
// 1. กรณี ID ที่มีจริง
fetchStudentById("6501", (err, student) => {
  if (err) {
    console.error("กรณีที่ 1 ผิดพลาด:", err.message);
    return;
  }
  console.log("กรณีที่ 1 พบข้อมูล:", student);
});

// 2. กรณี ID ที่ไม่มีอยู่
fetchStudentById("9999", (err, student) => {
  if (err) {
    console.error("กรณีที่ 2 ผิดพลาด:", err.message);
    return;
  }
  console.log("กรณีที่ 2 พบข้อมูล:", student);
});

// 3. กรณี ID ผิดรูปแบบ
fetchStudentById(42, (err, student) => {
  if (err) {
    console.error("กรณีที่ 3 ผิดพลาด:", err.message);
    return;
  }
  console.log("กรณีที่ 3 พบข้อมูล:", student);
});

