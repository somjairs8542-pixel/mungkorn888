// script.js
import { db, ref, set } from "./firebase-database.js";

// ทดสอบส่งข้อมูลเข้า Firebase
function sendTestData() {
  set(ref(db, 'test/'), {
    message: "ทดสอบการเชื่อมต่อสำเร็จ"
  }).then(() => {
    alert("ส่งข้อมูลสำเร็จ!");
  }).catch((error) => {
    console.error("ส่งข้อมูลล้มเหลว:", error);
  });
}

// เรียก function เมื่อโหลดเว็บ
window.onload = () => {
  sendTestData();
};
