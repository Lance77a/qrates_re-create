import styles from './Navbar.module.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import peace from '../public/peaceSticker.png';

const Navbar = () => {
    const [width, setWidth] = useState(899);
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

    const closeToggle = () => {
        setOpen(false)
        document.querySelector('body').classList.toggle('fixed')
    }


    return (
        <div className={open ? `${styles.mobileOverlay}` : undefined}>
            <nav className={styles.navbar}>
                <div className={`${styles.leftNav} ${styles.navCont}`}>
                    <img className={styles.logo} src="https://qrates.com/assets/common/logos/qrates-logo-ad8672a49aacf4d06a06690cfffa1fbb0a9b080f94021fb3fe3b97de14856d6a.svg" alt="Qrates Logo"></img>
                    <div href="#" className={styles.mobileIcons} >
                        {width <= 990 && <i onClick={() => setOpen(false)} className="fas fa-shopping-cart"></i>}
                        {width <= 990 && <i onClick={() => {
                            setOpen(!open)
                            document.querySelector('body').classList.toggle('fixed')}}
                            className="fas fa-bars"></i>}
                    </div>
                </div>
                <div className={open ? `${styles.navLinks} ${styles.active}` : `${styles.navLinks}`}>
                    <div className={`${styles.centerNav} ${styles.navCont}`}>
                        <a onClick={closeToggle} href="#" className={styles.navLink} >discover</a>
                        <a onClick={closeToggle} href="#" className={styles.navLink} >search</a>
                        <a onClick={closeToggle} href="#" className={styles.navLink} >why qrates</a>
                        {!open && <a href="#" className={styles.navLink} >cart</a>}
                        {open && <a onClick={closeToggle} href="#" className={styles.navLink} >about us</a>}
                        {open && <a onClick={closeToggle} href="#" className={styles.navLink} >contact</a>}
                    </div>
                    <div className={`${styles.rightNav} ${styles.navCont}`}>
                        {open && <div className={styles.socialLinks}>
                            <i className="fab fa-facebook" onClick={closeToggle}></i>
                            <i className="fab fa-instagram" onClick={closeToggle}></i>
                            <i className="fab fa-twitter" onClick={closeToggle}></i>
                        </div>}
                        {open && <div className={styles.peaceCont}>
                            <div className={styles.peaceSticker}>
                                <Image src={peace} alt="peace" />
                            </div>
                        </div >}
                        <a onClick={closeToggle} href="#" className={styles.navLink} >log in</a>
                        <a onClick={closeToggle} href="#" className={`${styles.navLink} ${styles.recordButton}`} >make a record</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar