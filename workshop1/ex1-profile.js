const nickName = "เจมส์";
const studentId = "68070123";
const age = 20;
const major = "วิศวกรรมคอมพิวเตอร์";
const registeredCourses = 6;
const remainingYears = 2; // สมถิติเหลืออีก 2 ปีตามโจทย์

// คำนวณปีที่จะจบจากปีพุทธศักราช 2569 + จำนวนปีที่เหลือ
const graduationYear = 2569 + remainingYears;

console.log(`===== บัตรแนะนำตัว =====`);
console.log(`ชื่อเล่น      : ${nickName}`);
console.log(`รหัสนักศึกษา : ${studentId}`);
console.log(`อายุ       : ${age} ปี`);
console.log(`สาขาวิชา   : ${major}`);
console.log(`ลงทะเบียน  : ${registeredCourses} วิชา`);
console.log(`ปีที่จะจบ   : ${graduationYear}`);
console.log(`======================`);