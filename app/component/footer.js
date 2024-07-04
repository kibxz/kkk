// app/components/Footer.js
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <p>Hydro Archon ยังไม่ได้รับการเผยแพร่อย่างเป็นทางการ ดังนั้นข้อมูลที่นำเสนอที่นี่จึงอิงตามข้อมูลที่ได้รับจากการทดสอบเบต้า หากจำเป็นเราจะอัปเดตคำแนะนำเมื่อนางเอกปรากฏในเกม </p>
      </footer>
    </>
  );
}
