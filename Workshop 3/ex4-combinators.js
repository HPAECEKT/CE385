const wait = (ms, value, willFail = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      willFail ? reject(new Error(`${value} ล้มเหลว`)) : resolve(value);
    }, ms);
  });

const timeoutPromise = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("ใช้แคชเก่าแทน");
    }, ms);
  });

async function main() {
  console.log("--- สถานการณ์ที่ 1: Promise.all ---");
  // เหตุผล: ต้องการข้อมูลครบทุกส่วนเพื่อประกอบเป็นหน้าแรก หากมีส่วนใดล้มเหลวหน้าเว็บจะไม่สามารถแสดงผลได้สมบูรณ์
  try {
    const res1Success = await Promise.all([
      wait(300, "โปรไฟล์"),
      wait(400, "ตารางเรียน"),
      wait(500, "ประกาศ"),
    ]);
    console.log(`เปิดหน้าแรก: ${res1Success.join(", ")}`);
  } catch (err) {
    console.error(`หน้าแรกเปิดไม่ได้: ${err.message}`);
  }

  // ทดสอบสถานการณ์ที่ 1 เมื่อมีประกาศล้มเหลว
  try {
    await Promise.all([
      wait(300, "โปรไฟล์"),
      wait(400, "ตารางเรียน"),
      wait(500, "ประกาศ", true),
    ]);
  } catch (err) {
    console.error(`หน้าแรกเปิดไม่ได้: ${err.message}`);
  }

  console.log("\n--- สถานการณ์ที่ 2: Promise.allSettled ---");
  //  ต้องการทราบผลการส่งแจ้งเตือนทุกช่องทาง ไม่ว่าจะสำเร็จหรือล้มเหลว โดยช่องที่ส่งไม่ผ่านต้องไม่ทำให้ระบบหยุดทำงาน
  const res2 = await Promise.allSettled([
    wait(300, "อีเมล"),
    wait(500, "SMS", true),
    wait(400, "แอป"),
  ]);
  res2.forEach((result, idx) => {
    const channel = ["อีเมล", "SMS", "แอป"][idx];
    if (result.status === "fulfilled") {
      console.log(`ช่องทาง ${channel}: สำเร็จ (${result.value})`);
    } else {
      console.log(`ช่องทาง ${channel}: ล้มเหลว (${result.reason.message})`);
    }
  });

  console.log("\n--- สถานการณ์ที่ 3: Promise.any ---");
  // ต้องการดึงข้อมูลจาก Mirror Server ตัวแรกที่ตอบกลับสำเร็จ โดยไม่สนใจตัวที่ล้มเหลว
  try {
    const res3 = await Promise.any([
      wait(300, "mirror-A", true),
      wait(600, "mirror-B"),
    ]);
    console.log(`ใช้ข้อมูลจาก: ${res3}`);
  } catch (err) {
    console.error(`ทุก Server ล้มเหลว: ${err.message}`);
  }

  console.log("\n--- สถานการณ์ที่ 4: Promise.race ---");
  // แข่งขันระหว่างการค้นหาจากฐานข้อมูลและเวลาหมด (Timeout) หากฐานข้อมูลตอบช้าเกิน 800ms จะสลับไปใช้แคชเก่าทันที
  const res4 = await Promise.race([
    wait(1200, "ข้อมูลจากฐานข้อมูล"),
    timeoutPromise(800),
  ]);
  console.log(`ผลลัพธ์การค้นหา: ${res4}`);
}

main();