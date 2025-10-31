import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <nav>
        <h1 className={style.logo}>Tobin's Site</h1>
        <ul className={style.navlist}>
          <Link href="/">Home</Link>
          <span>|</span>
          <Link href="/blog">Blog</Link>
          <span>|</span>
          <Link href="/portfolio">Portfolio</Link>
          <span>|</span>
          <Link href="/resume">Resume</Link>
          <span>|</span>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}
