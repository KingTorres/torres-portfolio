"use client"
import Styles from "@/css/skills.module.css"
import Image from "next/image"
import { RadarChart } from '@mui/x-charts/RadarChart';
// Image
import gitlabLogo from "@/assets/img/logo/gitlab.webp"
import githubLogo from "@/assets/img/logo/github.webp"
import vueLogo from "@/assets/img/logo/vue.webp"
import reactLogo from "@/assets/img/logo/react.webp"
import nextLogo from "@/assets/img/logo/next.webp"
import nodeLogo from "@/assets/img/logo/node.webp"
import typescriptLogo from "@/assets/img/logo/typescript.webp"
import photoshopLogo from "@/assets/img/logo/photoshop.webp"
import html5Logo from "@/assets/img/logo/html5.webp"
import css3Logo from "@/assets/img/logo/css3.webp"

export function MultiSeriesRadar() {
  return (
        <RadarChart
        series={[{ 
            data: [95, 75, 98, 40, 80],
            color: '#71c6ff',
        }]}
        radar={{
            max: 100,
            metrics: ['Responsiveness', 'Frontend', 'Layout', 'Backend', 'Graphics']
        }}
        sx={{
        '& text, & .MuiChartsRadar-metricLabel': {
          fill: '#ffffff7d !important'
        },
        '& .MuiRadarChart-gridDivider': {
            stroke: 'rgba(255, 255, 255, 0.74) !important'
        },
        '& .MuiRadarChart-seriesArea': {
            fill: '#4da0e8 !important',
            fillOpacity: '0.15 !important',
            stroke: '#71c6ff'
        },
      }}
    />
  );
}

const Skill = () => {
    return (
        <>
        <div className={Styles.sectionTitle}>Skills</div>
        <div className={Styles.tools}>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={gitlabLogo} alt="gitlab"/>
                </div>
                <div className={Styles.label}>Gitlab</div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={githubLogo} alt="github"/>
                </div>
                <div className={Styles.label}>Github</div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={vueLogo} alt="vue"/>
                </div>
                <div className={Styles.label}>VueJS</div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={reactLogo} alt="reactjs"/>
                </div>
                <div className={Styles.label}>ReactJS</div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={nextLogo} alt="nextjs"/>
                </div>
                <div className={Styles.label}>NextJS</div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={nodeLogo} alt="node"/>
                </div>
                <div className={Styles.label}>NodeJS</div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={typescriptLogo} alt="typescript"/>
                </div>
                <div className={Styles.label}>Typescript</div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={photoshopLogo} alt="photoshop"/>
                </div>
                <div className={Styles.label}>Photoshop</div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={html5Logo} alt="html5"/>
                </div>
                <div className={Styles.label}>html5</div>
            </div>
            <div className={Styles.item}>
                <div className={Styles.icon}>
                    <Image src={css3Logo} alt="css3"/>
                </div>
                <div className={Styles.label}>css3</div>
            </div>
        </div>
            <div className={Styles.sectionTitle}>Web Development Statistic</div>
            <div className={Styles.chartWrapper}>
                {MultiSeriesRadar()}
             </div>
        </>

    )
}

export default Skill