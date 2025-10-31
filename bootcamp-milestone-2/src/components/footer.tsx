import React from "react";
import style from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={style.footer}>
      © 2025 Tobin's Site | All Rights Reserved
    </footer>
  );
}
