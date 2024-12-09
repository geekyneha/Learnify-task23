
import React from "react";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <>
    <nav className={styles.navbar}>
        <div className={styles.logo}>Learnify</div>
        <ul className={styles.navLinks}>
          <li><button className={styles.navButton}>Login</button></li>
          <li><button className={styles.navButton}>Sign Up</button></li>
        </ul>
      </nav> 
      <div className={styles.container}>
       
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Dashboard</h2>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>Home</li>
          <li className={styles.menuItem}>Profile</li>
          <li className={styles.menuItem}>Settings</li>
          <li className={styles.menuItem}>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Welcome to Learnify!</h1>
          <p>explore your Learning !Here is an overview of your dashboard.</p>
        </header>

        <section className={styles.widgets}>
          <div className={styles.widget}>Learning</div>
          <div className={styles.widget}>Submissions</div>
          <div className={styles.widget}>Feedback</div>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2024 Learnify. All rights reserved.</p>
        </footer>
      </main>
    </div>
    </>
    
  );
};

export default Dashboard;


