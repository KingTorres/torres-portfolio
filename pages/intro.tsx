"use client"
import { useOrientation } from "@/hooks/orientation"
import Image from "next/image"
import Styles from "@/css/intro.module.css"

import DownloadIcon from '@/assets/svg/DownloadIcon'
import ClipboardIcon from '@/assets/svg/ClipboardIcon'

// image
import AvatarSmile from '@/assets/img/avatar/avatar-smile.webp'

const Intro = () => {
    const orientation = useOrientation()
    return (
        <div className={Styles.introBody}>
            <div className={Styles.details}>
                <div className={Styles.greetings}>Hi, I'm Michael Torres</div>
                <div className={Styles.description}>
                    <div>Frontend & Graphics</div>
                    <div>Responsive Web Designer</div>
                    {
                        orientation === 'landscape' ?
                        (<>
                            <div>Layout Designer</div>
                            <div>Reactive UI/UX</div>
                        </>
                        ) : null
                    }
                </div>
                <div className={Styles.introButton}>
                    <button><span>CV</span><DownloadIcon/></button>
                    <button><span>EMAIL</span><ClipboardIcon/></button>
                </div>
            </div>
            <div className={Styles.photo}>
                <div>
                    <Image src={AvatarSmile} alt="avatar" loading="eager"/>
                </div>
            </div>
        </div>
        
    )
}

export default Intro