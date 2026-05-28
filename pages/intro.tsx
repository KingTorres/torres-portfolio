import Styles from "@/css/content.module.css"
import IntroStyles from "@/css/intro.module.css"

const Intro = () => {
    return (
        <div className={Styles.section}>
            <div className={IntroStyles.introBody}>
                <div className={IntroStyles.details}></div>

                <div className={IntroStyles.details}>
                    <div className={IntroStyles.greetings}>Hi, I'm Michael Torres</div>
                    <div className={IntroStyles.description}>
                        <div>Frontend & Graphics</div>
                        <div>Responsive Web Designer</div>
                        {/* <div v-if="IS_LANDSCAPE}>Layout Designer</div>
                        <div v-if="IS_LANDSCAPE}>Reactive UI/UX</div> */}
                    </div>
                    <div className={IntroStyles.introButton}>
                        {/* <button @click="DownloadCV}><span>CV</span><download/></button>
                        <button @click="copyEmail}><span>EMAIL</span><clipboard/></button> */}
                    </div>
                </div>
                {/* <div className={IntroStyles.photo}>
                    <div>
                    <img src="@/assets/img/avatar/avatar-smile.webp" alt="avatar}>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default Intro