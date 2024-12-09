
import React from "react";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
   
      <nav className={styles.navbar}>
        <div className={styles.logo}>Learnify</div>
        <ul className={styles.navLinks}>
          <li><button className={styles.navButton}>Login</button></li>
          <li><button className={styles.navButton}>Sign Up</button></li>
        </ul>
      </nav>

     
      <header className={styles.header}>
        <h1>Welcome to Learnify</h1>
        <p>Your journey begins here!</p>
        <button className={styles.ctaButton}>Get Started</button>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <section>
          <h2>About Us</h2>
          <p>Learnify is a cutting-edge online learning platform designed to empower individuals with the skills they need to thrive in a fast-paced, technology-driven world. With a focus on delivering high-quality education, Learnify offers more than 25 carefully curated courses in the latest technologies and essential skill sets.</p>
        </section>
        <section>
          <h2>Our Services</h2>
          <p>At Learnify, we aim to bridge the gap between ambition and achievement by providing accessible, affordable, and up-to-date educational resources. Whether you’re a student, a professional, or a lifelong learner, we are here to help you unlock your potential.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;



