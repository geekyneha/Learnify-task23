import React from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();
  return (
    <div className={styles.outerContainer}>
        <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className={styles.button} onClick={()=>navigate('/')}>
          Login
        </button>
        <div className={styles.forgotPassword}>
          <p className={styles.link}>
            Forgot your password?
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
