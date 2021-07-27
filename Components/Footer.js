import styles from './Footer.module.scss'

const Footer = () => {
    const artistsArray = ['why qrates', 'crowdfunding', 'press and sell', 'our services', 'artist toolkit', 'referral program'];
    const fansArray = [ 'discover', 'records', 'stories', 'lists', 'artists & labels' ];
    const companyArray = [ 'about qrates', 'careers', 'partners' ];
    const helpArray = [ 'support center', 'contact us', 'returns', 'shipping' ];
    
    const FooterNav = (props) => {
        return (
            <nav className={styles.navCont}>
                <h2>{props.header}</h2>
                <ul>
                    {props.navArray.map((item, i) => {
                        return (
                            <li key={i}>
                                <a href="#">{item}</a>
                            </li>
                        )
                    })
                    }
                </ul>
            </nav>
        )
    }

    return (
            <div className={styles.container} >
                <div className={styles.upperFooter}>
                    <FooterNav header='for artists' navArray={artistsArray} />
                    <FooterNav header='for fans' navArray={fansArray} />
                </div>
                <div className={styles.upperFooter}>
                    <FooterNav header='our company' navArray={companyArray} />
                    <FooterNav header='help' navArray={helpArray} />
                </div>
                <div className={styles.lowerFooter}>
                    <div className={styles.socials} >
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-instagram-square"></i>
                        <i class="fab fa-twitter-square"></i>
                    </div>
                    <div className={styles.footerBanner}>
                        <img src='https://qrates.com/assets/common/logos/qrates-logo-footer-88bac955aae3ad066ff2dd2a16ce714cb1c96be01ce8d60b8e750f57d8fe9c22.svg' alt='Qrates Company Banner' />
                    </div>
                    <div className={styles.legal}>
                        <p>terms of service</p>
                        <p>privacy policy</p>
                        <p>legal information</p>
                    </div>
                </div>
            </div>
    )
}

export default Footer