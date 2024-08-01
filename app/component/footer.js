// app/components/Footer.js
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <p>Identity V เป็นเกมแนวสยองขวัญบนมือถือแนวต่อสู้ฝ่ายตรงข้ามในรูปแบบ 1 ต่อ 4 ความกลัวมักจะมาจากสิ่งที่ไม่รู้จัก </p>
      </footer>
    </>
  );
}
