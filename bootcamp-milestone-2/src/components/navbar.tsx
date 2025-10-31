import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header className={style.navbar}>
      <nav>
        <h1 className={style.logo}>Tobin's Site</h1>
        <ul className={style.navlist}>
          <Link href="index.html">Home</Link>
          <span>|</span>
          <Link href="blog.html">Blog</Link>
          <span>|</span>
          <Link href="portfolio.html">Portfolio</Link>
          <span>|</span>
          <Link href="resume.html">Resume</Link>
          <span>|</span>
          <Link href="contact.html">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}
