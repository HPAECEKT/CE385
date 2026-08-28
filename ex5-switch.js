// ฟังก์ชันดึงราคาอาหารตามเมนู
function getMenuPrice(menu) {
  switch (menu) {
    // 3 เมนูนี้ราคา 50 บาทเท่ากัน ใช้ fall-through จงใจรวม case เข้าด้วยกัน
    case "ข้าวผัด":
    case "ข้าวมันไก่":
    case "ข้าวหมูแดง":
      return 50;
    case "ผัดไทย":
      return 60;
    case "ต้มยำกุ้ง":
      return 120;
    default:
      return 0; // เมนูอื่น ๆ = 0 (ไม่มีในรายการ)
  }
}

// ฟังก์ชันคำนวณตัวคูณตามขนาด
function getSizeMultiplier(size) {
  switch (size) {
    case "ธรรมดา":
      return 1;
    case "พิเศษ":
      return 1.5;
    case "จัมโบ้":
      return 2;
    default:
      return 1;
  }
}

// ส่วนที่ 3 — สร้าง array ของออร์เดอร์อย่างน้อย 5 รายการ (รวมเมนูที่ไม่มีในระบบเพื่อทดสอบ default)
const orders = [
  { menu: "ผัดไทย", size: "พิเศษ", qty: 2 },
  { menu: "ข้าวผัด", size: "ธรรมดา", qty: 1 },
  { menu: "ต้มยำกุ้ง", size: "จัมโบ้", qty: 1 },
  { menu: "ข้าวมันไก่", size: "พิเศษ", qty: 3 },
  { menu: "ส้มตำปูปลาร้า", size: "ธรรมดา", qty: 2 } // เมนูนอกรายการทดสอบ default
];

console.log("===== รายการบิลคำนวณค่าอาหาร =====");
let grandTotal = 0;

for (const order of orders) {
  const pricePerUnit = getMenuPrice(order.menu);
  const multiplier = getSizeMultiplier(order.size);
  const totalPrice = pricePerUnit * multiplier * order.qty;

  if (pricePerUnit === 0) {
    console.log(`เมนู "${order.menu}" ไม่มีในรายการ`);
  } else {
    console.log(`${order.menu} (${order.size}) x${order.qty} = ${totalPrice} บาท`);
    grandTotal += totalPrice;
  }
}

console.log(`---------------------------------`);
console.log(`ยอดชำระสุทธิรวมทั้งสิ้น: ${grandTotal} บาท`);
console.log(`=================================`);