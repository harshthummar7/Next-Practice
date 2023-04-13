import React from "react";
import style from "../styles/hello.module.css";
import Image from "next/image";
import image from "../public/1.jpg";
function hello() {
  return (
    <div className={style.styling}>
      <h1>hello</h1>
      <h2>vbhfdjghbfdj</h2>
      <Image src={image} alt="image" hight="40px" width="48px" />
    </div>
  );
}

export default hello;
