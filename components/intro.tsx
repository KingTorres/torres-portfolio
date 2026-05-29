"use client"
import { useOrientation } from "@/hooks/orientation"
import Image from "next/image"
import Styles from "@/css/intro.module.css"

import DownloadIcon from '@/assets/svg/DownloadIcon'
import ClipboardIcon from '@/assets/svg/ClipboardIcon'

import Details from '@/constants/details.json'
// image
import AvatarSmile from '@/assets/img/avatar/avatar-smile.webp'
import Udemy from '@/assets/img/logo/udemy.webp'
import Tcu from '@/assets/img/logo/tcu.webp'
import Ubnhs from '@/assets/img/logo/ubnhs.webp'


function DownloadCV() {
    const url = "https://drive.google.com/file/d/1RWbHvVRUVih2mNRGhglUFcS4wgaAF437/view?usp=sharing";
    window.open(url, "_blank");
}
async function copyEmail() {
    try {
        await navigator.clipboard.writeText('torres.michael36@gmail.com')
        alert('Email Copied')
    } catch (err) {
        alert('Failed to copy:'+ err)
    }   
}
async function copyNumber() {
    try {
        await navigator.clipboard.writeText('09493923708')
        alert('Contact Copied')
    } catch (err) {
        alert('Failed to copy:'+ err)
    }   
}
function udemy1() {
    window.open('https://ude.my/UC-7257737f-91a3-40ec-8f0e-5e21f2a4e73e', '_blank');
}
function udemy2() {
    window.open('https://ude.my/UC-a1c48038-82a7-4e66-aca2-9191215111a0', '_blank');
}

export function aboutDetails() {
    return (
        <div className={Styles.aboutBody} onClick={copyNumber}>
        {Details.about.map((item, index) => {
            const [key, value] = Object.entries(item)[0];

            return (
            <div className={Styles.item} key={index}>
                <div className={Styles.label}>
                {key}
                </div>
                <div className={Styles.data}>{value}</div>
            </div>
            );
        })}
        </div>
    );
}

const Intro = () => {
    const orientation = useOrientation()
    return (
        <>
            <div className={Styles.sectionTitle}>Frontend Developer</div>
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
                        <button onClick={DownloadCV}><span>CV</span><DownloadIcon/></button>
                        <button onClick={copyEmail}><span>EMAIL</span><ClipboardIcon/></button>
                    </div>
                </div>
                <div className={Styles.photo}>
                    <div>
                        <Image src={AvatarSmile} alt="avatar" loading="eager"/>
                    </div>
                </div>
            </div>
            {aboutDetails()}
            <div className={Styles.sectionTitle}>Certification</div>
            <div className={Styles.educationBody}>
                <div className={`${Styles.item} ${Styles.active}`} onClick={udemy1}>
                    <div className={Styles.logo}>
                        <Image src={Udemy} alt="udemy" />
                    </div>
                    <div className={Styles.name}>
                    <div>React, Next.js and NodeJS</div>
                    <div>ude.my/UC-7257737f-91a3-40ec-8f0e-5e21f2a4e73e</div>
                    </div>
                    <div className={Styles.action}>{`>`}</div>
                </div>
                <div className={`${Styles.item} ${Styles.active}`} onClick={udemy2}>
                    <div className={Styles.logo}>
                        <Image src={Udemy} alt="udemy" />
                    </div>
                    <div className={Styles.name}>
                    <div>CSS, Bootstrap, Javascript</div>
                    <div>ude.my/UC-a1c48038-82a7-4e66-aca2-9191215111a0</div>
                    </div>
                    <div className={Styles.action}>{`>`}</div>
                </div>
            </div>
        </>
    )
}

export default Intro