# Workshop 3

* **`ex1-callback.js`**
  * ทำระบบค้นหานักศึกษาด้วย Error-first Callback (หน่วง 300ms)
  * เช็คกรณี id ผิดประเภท และ id ที่หาไม่เจอ
  * ตอบคำถามท้ายไฟล์เรื่อง try-catch กับเหตุผลที่ต้องใส่ `return`

* **`ex2-promise.js`**
  * แปลงข้อแรกมาใช้ `new Promise` แล้วต่อด้วย `.then()`, `.catch()`, `.finally()`
  * ทำ Chaining 3 สเต็ปเพื่อแปลงคะแนนเป็นเกรดแล้ว print ข้อความ
  * ทำฟังก์ชันโบนัส `promisify()` ไว้แปลง callback ทั่วไปเป็น promise

* **`ex3-async-await.js`**
  * เทียบเวลาชัดๆ: Sequential (~900ms) vs Parallel ด้วย `Promise.all` (~300ms) ไวกว่า 3 เท่า
  * เขียน `safeReport()` ดัก Error ด้วย `try-catch-finally` โปรแกรมไม่ดับ

* **`ex4-combinators.js`**
  * จับคู่ Combinator ตามสถานการณ์จริง:
    * `Promise.all` — โหลดหน้าแรก ต้องครบทุกชิ้น
    * `Promise.allSettled` — ยิงแจ้งเตือน พังบางอันก็ช่างมัน ขอรายงานครบ
    * `Promise.any` — ดึงเซิร์ฟเวอร์ Mirror เอาตัวแรกที่รอด
    * `Promise.race` — แข่งเวลากับ timeout ถ้าเกิน 800ms โดดไปใช้แคช

