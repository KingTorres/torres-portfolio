import styles from '@/css/nav.module.css'
import HomeIcon from '@/assets/svg/HomeIcon'
import FolderIcon from '@/assets/svg/FolderIcon'
import ToolsIcon from '@/assets/svg/ToolsIcon'
const Nav = () => {
    return (
        <div className={styles.navigation}>
            <button className={styles.active}>
                <div className={styles.icon}><HomeIcon/></div>
                <div className={styles.label}>INTRO</div>
            </button>
            <button>
                <div className={styles.icon}><FolderIcon/></div>
                <div className={styles.label}>WORKS</div>
            </button>
            <button>
                <div className={styles.icon}><ToolsIcon/></div>
                <div className={styles.label}>SKILLS</div>
            </button>
        </div>
    )
}

export default Nav