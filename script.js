// script.js
import { db } from "./firebase-config.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

set(ref(db, 'test'), {
  message: "เชื่อม Firebase สำเร็จ"
});
