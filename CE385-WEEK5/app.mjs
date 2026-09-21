import express from "express";

// 1. สร้าง Express Application
const app = express();

// Middleware สำหรับแปลง Request Body ที่เป็นรูปแบบ JSON ให้อยู่ในรูปของ req.body
app.use(express.json());

// ข้อมูลจำลองสำหรับเก็บรายการ Todo เริ่มต้น
const TODOS = [
  { id: "1", title: "อ่านสไลด์สัปดาห์ที่ 5", done: true, priority: "high" },
  { id: "2", title: "ติดตั้ง Express", done: true, priority: "high" },
  { id: "3", title: "ทำ Workshop 4", done: false, priority: "normal" },
  { id: "4", title: "เตรียมสอบกลางภาค", done: false, priority: "low" },
];

// รายการค่า priority ที่ระบบอนุญาตให้ใช้งาน
const PRIORITIES = ["high", "normal", "low"];

// 2. Custom Middleware สำหรับตรวจสอบความถูกต้องของข้อมูลก่อนบันทึก Todo
function validateTodo(req, res, next) {
  // ดึง title และ priority จาก req.body (หาก body เป็น null/undefined จะใช้เป็น object ว่าง {})
  const { title, priority } = req.body ?? {};

  // ตรวจสอบว่ามี title หรือไม่ และต้องเป็น string ที่ไม่ใช่ช่องว่างล้วน
  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "ต้องมี title เป็นข้อความ" });
  }

  // หากมีการส่ง priority มา ต้องเป็นค่าที่ตรงกับที่กำหนดไว้ใน PRIORITIES
  if (priority !== undefined && !PRIORITIES.includes(priority)) {
    return res.status(400).json({ error: "priority ไม่ถูกต้อง" });
  }

  // หากข้อมูลถูกต้อง ให้ข้ามไปทำงานใน handler ลำดับถัดไป
  return next();
}

// 3. สร้าง Router สำหรับจัดการ Endpoint ย่อยของระบบ Todos
const todoRouter = express.Router();

// [GET] ตรวจสอบสถานะการทำงานของเซิร์ฟเวอร์
todoRouter.get("/health", (req, res) => { 
  res.json({ status: "ok" });
});

// [GET] ดึงรายการ Todos ทั้งหมด (Clone ข้อมูลออกไปด้วย Spread Operator เพื่อป้องกันการแก้ไขค่าต้นฉบับโดยตรง)
todoRouter.get("/", (req, res) => { 
  res.json(TODOS.map((t) => ({ ...t })));
});

// [GET] ดึงข้อมูล Todo เฉพาะรายการที่ตรงกับ id ที่ส่งเข้ามาผ่าน URL Parameter
todoRouter.get("/:id", (req, res) => { 
  const todo = TODOS.find((t) => t.id === req.params.id);
  
  // หากค้นหาไม่พบ ส่งสถานะ 404 Not Found
  if (!todo) {
    return res.status(404).json({ error: `ไม่พบรายการ ${req.params.id}` });
  }

  // หากพบรายการ ส่งข้อมูลกลับในรูปแบบ JSON
  return res.json({ ...todo });
});

todoRouter.post("/todos", validateTodo, (req, res) => {
  const created = {
    id: String(TODOS.length + 1),        // กำหนด ID อัตโนมัติจากจำนวนรายการที่มี
    title: req.body.title,               // ชื่อรายการ
    done: false,                         // สถานะเริ่มต้นของงาน
    priority: req.body.priority ?? "normal", // ค่า priority ถ้าไม่ส่งมาให้ตั้งเป็น "normal"
  };

  // บันทึกรายการใหม่ลงใน Array
  TODOS.push(created);

  // ส่งข้อมูลที่ถูกสร้างใหม่กลับพร้อมรหัสสถานะ 201 Created
  res.status(201).json({ ...created });
});

// 4. ผูก Router เข้ากับ Base Path "/api/v1/todos"
app.use("/api/v1/todos", todoRouter);

// 5. สั่งให้เซิร์ฟเวอร์เริ่มรับ Request ที่พอร์ต 3000
app.listen(3000, () => {
  console.log("เซิร์ฟเวอร์ทำงานที่ http://localhost:3000");
});