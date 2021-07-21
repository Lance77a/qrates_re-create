import styles from './Navbar.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import peace from '../public/peaceSticker.png';

const Navbar = () => {
    const [width, setWidth] = useState('899');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    if (open && width >= 990) {
        setOpen(false);
    }

    return (
        <div className={open ? `${styles.mobileOverlay}` : undefined}>
            <nav className={styles.navbar}>
                <div className={`${styles.leftNav} ${styles.navCont}`}>
                    <img className={styles.logo} src="https://qrates.com/assets/common/logos/qrates-logo-ad8672a49aacf4d06a06690cfffa1fbb0a9b080f94021fb3fe3b97de14856d6a.svg" alt="Qrates Logo"></img>
                    <div href="#" className={styles.mobileIcons} >
                        {width <= 990 && <i onClick={() => setOpen(false)} className="fas fa-shopping-cart"></i>}
                        {width <= 990 && <i onClick={() => setOpen(!open)} className="fas fa-bars"></i>}
                    </div>
                </div>
                <div className={open ? `${styles.navLinks} ${styles.active}` : `${styles.navLinks}`}>
                    <div className={`${styles.centerNav} ${styles.navCont}`}>
                        <a onClick={() => setOpen(false)} href="#" className={styles.navLink} >discover</a>
                        <a onClick={() => setOpen(false)} href="#" className={styles.navLink} >search</a>
                        <a onClick={() => setOpen(false)} href="#" className={styles.navLink} >why qrates</a>
                        {!open && <a onClick={() => setOpen(false)} href="#" className={styles.navLink} >cart</a>}
                        {open && <a onClick={() => setOpen(false)} href="#" className={styles.navLink} >about us</a>}
                        {open && <a onClick={() => setOpen(false)} href="#" className={styles.navLink} >contact</a>}
                    </div>
                    <div className={`${styles.rightNav} ${styles.navCont}`}>
                        {open && <div className={styles.socialLinks}>
                            <i className="fab fa-facebook" onClick={() => setOpen(!open)}></i>
                            <i className="fab fa-instagram" onClick={() => setOpen(!open)}></i>
                            <i className="fab fa-twitter" onClick={() => setOpen(!open)}></i>
                        </div>}
                        {open && <div className={styles.peaceCont}>
                            <div className={styles.peaceSticker}>
                                <Image src={peace} alt="peace" />
                            </div>
                        </div >}
                        <a onClick={() => setOpen(false)} href="#" className={styles.navLink} >log in</a>
                        <a onClick={() => setOpen(false)} href="#" className={`${styles.navLink} ${styles.recordButton}`} >make a record</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar