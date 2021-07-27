import styles from './ForFansNav.module.scss';
import ContainerTag from './ContainerTag';

const ForFansNav = () => {
    return (
        <div>
            <section className={styles.container}>
                <ContainerTag border='2px solid white' content='for fans' />
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <a href="#">Discover</a>
                        </li>
                        <li>
                            <a href="#">Records</a>
                        </li>
                        <li>
                            <a href="#">Stories</a>
                        </li>
                        <li>
                            <a href="#">Lists</a>
                        </li>
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