'use client'
import { useState, useEffect } from 'react'
import styles from '@/css/nav.module.css'
import HomeIcon from '@/public/assets/svg/HomeIcon'
import FolderIcon from '@/public/assets/svg/FolderIcon'
import ToolsIcon from '@/public/assets/svg/ToolsIcon'
const Nav = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        const sections = ['intro', 'works', 'skills'];
        const observerOptions = {
            root: null, // uses the viewport
            rootMargin: '-50% 0px -50% 0px', // Triggers when the section hits the middle of the screen
            threshold: 0
        };
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        // Track each section element
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);
    return (
        <div className={styles.navigation}>
            <button className={activeSection === 'intro' ? styles.active : ''} onClick={() => scrollToSection('intro')}>
                <div className={styles.icon}><HomeIcon/></div>
                <div className={styles.label}>INTRO</div>
            </button>
            <button className={activeSection === 'works' ? styles.active : ''} onClick={() => scrollToSection('works')}>
                <div className={styles.icon}><FolderIcon/></div>
                <div className={styles.label}>WORKS</div>
            </button>
            <button className={activeSection === 'skills' ? styles.active : ''} onClick={() => scrollToSection('skills')}>
                <div className={styles.icon}><ToolsIcon/></div>
                <div className={styles.label}>SKILLS</div>
            </button>
        </div>
    )
}

export default Nav