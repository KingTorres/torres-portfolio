"use client"
import Styles from "@/css/works.module.css"
import Image from "next/image";

// Images
import megabetLogo from "@/assets/img/logo/megabet_logo_single.webp"
import cgmLogo from "@/assets/img/logo/cgm.webp"
import asiatypeLogo from "@/assets/img/logo/asiatype.webp"


function gotoMegabet() {
    window.open('https://megabet-paradise.com/', '_blank');
}
const Work = () => {
    return(
        <>
        <div className={Styles.sectionTitle}>Frontend Developer</div>
        <div className={Styles.projectList}>
            <div className={`${Styles.listItem} ${Styles.active}`} onClick={gotoMegabet}>
                <div className={Styles.logo}>
                    <Image src={megabetLogo} alt="megabet"/>
                </div>
                <div className={Styles.name}>
                    <div className={Styles.title}>Megabet</div>
                    <div className={Styles.subTitle}>Layout, Screen Responsiveness, Reactive.</div>
                </div>
                <div className={Styles.action}>{'>'}</div>
            </div>
            <div className={Styles.listItem}>
                <div className={Styles.logo}>
                    <Image src={cgmLogo} alt="cgm manila"/>
                </div>
                <div className={Styles.name}>
                    <div className={Styles.title}>Circle Graphics</div>
                    <div className={Styles.subTitle}>Data Conversion, Macros.</div>
                </div>
            </div>
            <div className={Styles.listItem}>
                <div className={Styles.logo}>
                    <Image src={asiatypeLogo} alt="asiatype"/>
                </div>
                <div className={Styles.name}>
                    <div className={Styles.title}>Asiatype</div>
                    <div className={Styles.subTitle}>Data Conversion, Macros.</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Work