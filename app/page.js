// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '../app/styles/Home.module.css';

export default function Home() {
  return (
      <div>
        <Head>
          <title>Eckige Sticker</title>
          <meta name="description" content="Finde deinen Style mit kreativen Stickern" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header-Bereich */}
        <header className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.logo}>Eckige Sticker</h1>
            {/*
            <nav className={styles.nav}>
              <a href="#home">Home</a>
              <a href="#about">Über Uns</a>
              <a href="#shop">Shop</a>
              <a href="#contact">Kontakt</a>
            </nav>
            */}
          </div>
        </header>

        {/* Hero-Bereich
        <section
            className={styles.hero}
            style={{
              backgroundImage: `url('/images/hero-banner.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
        >
          <div className={styles.heroContent}>
            <h2>Finde deinen Style mit kreativen Stickern</h2>
            <p>Individuelle Designs für jeden Anlass</p>
            <a href="#shop" className={styles.ctaButton}>Jetzt entdecken</a>
          </div>
        </section>
        */}

        {/* Hauptinhalt-Bereich */}
        <main className={styles.mainContent}>
          <div className={styles.container}>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <img src="/images/geld-her-sticker.png" alt="Sticker 1" className={styles.cardImage}/>
              </div>
              <div className={styles.card}>
                <img src="/images/bursche-sticker.png" alt="Sticker 2" className={styles.cardImage}/>
              </div>
              <div className={styles.card}>
                <img src="/images/komm-lass-Sticker.png" alt="Sticker 2" className={styles.cardImage}/>
              </div>
            </div>
          </div>
        </main>

        {/* Footer-Bereich */}
        <footer className={styles.footer}>
          <p>&copy; 2024 EckigeSticker. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
  );
}
