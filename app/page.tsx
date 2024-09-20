import Image from "next/image";
import styles from "./page.module.css";
import Divider from "./components/divider";
// import Navbar from './components/nav'

export default function Home() {
  return (
  <main>
    {/* <Navbar /> */}
    <h1>Home</h1>
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={styles.tagline}>Buiness Intelligence 
          <br/> & Analytics Club</span>
          <span className={styles.taglinetext}>
            <nbsp></nbsp> est.2015 
            <br/>
            <span className={styles.text}>
              We are the premier club for business intelligence & analytics 
              <span className={styles.breakline}>at Singapore Management University </span>
            </span>
          </span>
      </div>
    </div>
    <Divider />
  </main>
  );
}
