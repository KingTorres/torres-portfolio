import Styles from "@/css/content.module.css"
import Intro from "@/pages/intro";


export default function Home() {
  return (
    <div className={Styles.content}>
      <section className={Styles.section}>
        <Intro/>
      </section>
    </div>
  );
}