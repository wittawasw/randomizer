"use client";

import { useState } from 'react';
import styles from "../../page.module.css";
import Link from "next/link";

export default function NewValidationPage() {
  const [thaiID, setThaiID] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setThaiID(e.target.value);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^\d{13}$/.test(thaiID)) {
      setError('Thai ID must be 13 digits');
    } else {
      alert('Thai ID is valid');
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/">
          สุ่มเลขบัตร
        </Link>

        <h1>Validate Thai ID</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="thaiID">Thai ID:</label>
            <input
              type="text"
              id="thaiID"
              name="thaiID"
              value={thaiID}
              onChange={handleChange}
              style={{ marginLeft: '10px' }}
              required
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>Validate</button>
        </form>
      </main>
    </div>
  );
}
