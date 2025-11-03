import React from "react";
import style from "./blogPreview.module.css";
import { Blog } from "@/src/app/blog/blogData";
import Image from "next/image";

export default function BlogPreview(props: Blog) {
  return (
    <>
      <div className={style.preview}>
        <h3>{props.title}</h3>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={800}
          height={800}
        />
      </div>
    </>
  );
}
