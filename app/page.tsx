import Styles from "@/css/content.module.css"
import Intro from "@/components/intro";
import Works from "@/components/works";
import Skills from "@/components/skills";
import References from "@/components/references";

export default function Home() {
  return (
    <div className={Styles.content}>
      <section id="intro" className={Styles.section}>
        <Intro/>
      </section>
      <section id="works" className={Styles.section}>
        <Works/>
      </section>
      <section id="skills" className={`${Styles.section} ${Styles.skill}`}>
        <Skills/>
      </section>
      <section id="references" className={Styles.section}>
        <References/>
      </section>
    </div>
  );
}