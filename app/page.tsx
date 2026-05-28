import styles from "@/css/content.module.css"
import Intro from "@/pages/intro";


export default function Home() {
  return (
    <div className={styles.content}>
      <Intro/>
    </div>
  );
}