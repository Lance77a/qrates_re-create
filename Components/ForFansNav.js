import styles from './ForFansNav.module.scss';
import ContainerTag from './ContainerTag';

const ForFansNav = () => {
    return (
        <div>
            <section className={styles.container}>
                <ContainerTag border='2px solid white' content='for fans' />
                <nav className={styles.nav}>
                    <ul>
                        <li href="#">Discover</li>
                        <li href="#">Records</li>
                        <li href="#">Stories</li>
                        <li href="#">Lists</li>
                    </ul>
                    <div className={styles.footerLink}>
                        <a href="">The lastest from the Qrates Community →</a>
                    </div>
                </nav>
            </section>
        </div>
    )
}

export default ForFansNav