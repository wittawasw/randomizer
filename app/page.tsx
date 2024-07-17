"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';
import { ThaiId } from "@/lib/thai_id";

export default function Home() {
  const [thaiID, setThaiID] = useState('');

  const randomThaiID = () => {
    const thaiid = ThaiId.generate();

    setThaiID(thaiid);

    navigator.clipboard.writeText(thaiid)
      .then(() => {
        console.log('Thai ID copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy Thai ID: ', err);
      });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>โปรแกรมสุ่มเลขบัตรประชาชน</h1>
        <ul>
          <li>
            สุ่มเลขตาม format คนที่เกิดในประเทศไทยเท่านั้น
          </li>
          <li>
            ไม่รับประกันความถูกต้องใดๆทั้งสิ้น
          </li>
          <li>
            ถ้าบังเอิญตรงกับเลขจริงของใคร มันคือความบังเอิญจริงๆ
          </li>
        </ul>

        <button onClick={randomThaiID}>สุ่ม</button>
        {thaiID && (
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{thaiID}</p>
          </div>
        )}
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file-text.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
