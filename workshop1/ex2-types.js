// ไฟล์ทดสอบชนิดข้อมูลและการแปลงชนิดข้อมูลใน JavaScript
// ครอบคลุมการใช้งาน typeof, การเช็คค่าพิเศษ และการแปลงประเภทข้อมูล

// ส่วนที่ 1 — สร้างตัวแปรให้ครบ 6 ชนิด
const greeting = "สวัสดี";
const score = 95;
const isPass = true;
let notAssigned;
const emptyValue = null;
const hobbies = ["อ่านหนังสือ", "เล่นเกม", "ขี่มอเตอร์ไซค์"];

console.log(`ค่า: ${greeting} | ชนิด: ${typeof greeting}`);
console.log(`ค่า: ${score} | ชนิด: ${typeof score}`);
console.log(`ค่า: ${isPass} | ชนิด: ${typeof isPass}`);
console.log(`ค่า: ${notAssigned} | ชนิด: ${typeof notAssigned}`);
console.log(`ค่า: ${emptyValue} | ชนิด: ${typeof emptyValue}`); // ได้ object ตามพฤติกรรมดั้งเดิมของ JS
console.log(`ค่า: ${hobbies} | ชนิด: ${typeof hobbies}`); // ได้ object (array)

// ส่วนที่ 2 — ตอบคำถามด้วยโค้ดผ่าน console
console.log("--- ส่วนที่ 2 ---");
console.log("typeof null ได้ผลลัพธ์เป็น:", typeof null, "(ในทางทฤษฎีถือเป็นข้อผิดพลาดดั้งเดิมของภาษา JavaScript ที่ยังคงไว้)");
console.log("ตัวแปรที่ประกาศแล้วยังไม่กำหนดค่า มีชนิดเป็น:", typeof notAssigned);
const invalidNumber = Number("abc");
console.log("typeof NaN ได้ผลลัพธ์เป็น:", typeof invalidNumber, "โดยที่ค่า NaN คือ:", invalidNumber);

// ส่วนที่ 3 — การแปลงชนิด
console.log("--- ส่วนที่ 3 ---");
const inputAge = "20";
const inputScore = "85.5";

const convertedAge = Number(inputAge) + 5;
console.log("แปลง inputAge เป็นตัวเลขแล้วบวก 5 ได้:", convertedAge);

const convertedScore = Number(inputScore);
console.log("แปลง inputScore แสดงผลทศนิยม 1 ตำแหน่ง:", convertedScore.toFixed(1));

console.log("inputAge === 20 ให้ผลลัพ  ธ์เป็น:", inputAge === 20, "(เพราะเป็น string เทียบกับ number)");
console.log("Number(inputAge) === 20 ให้ผลลัพธ์เป็น:", Number(inputAge) === 20, "(เพราะแปลงเป็น number แล้วค่าตรงกัน)");         