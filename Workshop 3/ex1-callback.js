const students = [
  { id: "6501", name: "Somchai", major: "CE", score: 85 },
  { id: "6502", name: "Somsri", major: "CE", score: 72 },
  { id: "6503", name: "Anan", major: "LE", score: 64 },
  { id: "6504", name: "Kanya", major: "IT", score: 90 },
];

// ฟังชั่นค้นหานักศึกษาด้วย error-first Callback
function fetchStudentById(id,Callback){
    if (typeof id !== "string" || id.trim() ===""){
        return Callback(new Error("รหัสนักศึกษาไม่ถูกต้อง"))

};

setTimeout(() => {
    const student = students..find((s) => s.id === id);
    if(!student){
        return callbacck(new Error('ไม่พบรหัสนักศึกษา ${id}');)
    }
    return callbacck (null,{ ...student});
  } ,300);
}

// กรณีไอดีมีจริง
fetchStudentById("6501",(err,student) => {
    if(err){
        console.error("กรณีที่ 1 ผิดพลาด:",err.message);
        return;
    }
    console.log("กรณีที่ 1 พบข้อมูล:",student);
});