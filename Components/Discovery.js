import styles from './Discovery.module.scss';
import Image from 'next/image';
import orion_1 from '../public/Orion_1.jpeg';
import okSticker from '../public/ok_sticker.png';
import StyledButton from './StyledButton';

const Discovery = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.heading}>
                    Qrates
                    <span className="hollowText-" >Music in</span>
                    <span className="hollowText-" >your hands</span>
                </h1>
            </div>
            <div className={styles.imageCont}>
                <div className={styles.mainImage}>
                    
                        <Image src={orion_1} alt="Styled 'OK' hand signal sticker"></Image>
                  
                </div>
                <div className={styles.okSticker}>
                    <Image src={okSticker} alt="Music Artist"></Image>
                </div>
                <div className={styles.sidebarText}>
                    <a href="#"><span>Qrion</span> is on Qrates</a>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.blurb}>
                    <p>We make it easy for artists to press vinyl, so fans keep pieces of the music they love. ↓</p>
                </div>
                <div className={styles.footerButtons}>
                        <StyledButton bgColor='black' color='white' content='Discover Records' />
                        <StyledButton bgColor='white' color='black' border='2px solid black' content='Make A Record' />
                </div>
            </div>
        </div>
    )
}

export default Discovery