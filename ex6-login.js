const SYSTEM_USER = "admin";
const SYSTEM_PASS = "ce385pass";

// ฟังก์ชันตรวจสอบการเข้าสู่ระบบตามลำดับความสำคัญ
function login(inputUser, inputPass, role, isActive, age) {
  // 1. ตรวจสอบ username หรือ password ไม่ถูกต้อง
  if (inputUser !== SYSTEM_USER || inputPass !== SYSTEM_PASS) {
    return "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (401)";
  }

  // 2. ตรวจสอบบัญชีถูกระงับ (isActive เป็น false)
  if (isActive === false) {
    return "บัญชีนี้ถูกระงับการใช้งาน (403)";
  }

  // 3. ตรวจสอบอายุ (อายุน้อยกว่า 18)
  if (age < 18) {
    return "อายุไม่ถึงเกณฑ์ (—)";
  }

  // 4 & 5. ผ่านทุกข้อ ตรวจสอบสิทธิ์บทบาท (role)
  if (role === "อาจารย์") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ผู้ดูแล) (200)";
  } else if (role === "นักศึกษา") {
    return "เข้าสู่ระบบสำเร็จ (สิทธิ์ทั่วไป) (200)";
  }

  return "เกิดข้อผิดพลาดเกี่ยวกับบทบาทผู้ใช้งาน";
}

// ส่วนที่ 2 — ทดสอบอย่างน้อย 6 กรณี
console.log("===== ผลการทดสอบระบบตรวจสอบสิทธิ์ =====");
console.log("ทดสอบที่ 1 (สำเร็จ - อาจารย์):", login("admin", "ce385pass", "อาจารย์", true, 25));
console.log("ทดสอบที่ 2 (สำเร็จ - นักศึกษา):", login("admin", "ce385pass", "นักศึกษา", true, 20));
console.log("ทดสอบที่ 3 (รหัสผ่านผิด):", login("admin", "wrongpass", "อาจารย์", true, 25));
console.log("ทดสอบที่ 4 (ชื่อผู้ใช้ผิด):", login("user_fail", "ce385pass", "นักศึกษา", true, 20));
console.log("ทดสอบที่ 5 (บัญชีถูกระงับ):", login("admin", "ce385pass", "อาจารย์", false, 30));
console.log("ทดสอบที่ 6 (อายุไม่ถึงเกณฑ์):", login("admin", "ce385pass", "นักศึกษา", true, 16));


