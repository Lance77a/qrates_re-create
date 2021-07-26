import styles from './ImageSection.module.scss';
import SectionWrapper from './SectionWrapper';
import ContainerTag from './ContainerTag';
import StyledButton from './StyledButton'
import Image from 'next/image';
import clutter from '../public/static/clutter.jpeg';
import recordPlane from '../public/static/record_plane.png';
import holdingRecord from '../public/static/holding_record.jpeg';
import fastRecord from '../public/static/fast_record.png';

const ImageSection = (props) => {
    return (
        <SectionWrapper bgColor={props.mainBg} >
           <section className={styles.container}>
                <div className={styles.mainImg}>
                        <Image src={props.mainImage === 'clutterImage' ? clutter : holdingRecord } alt={props.mainImageAlt} className={styles.imageStyling} width={1000} height={1000} layout="responsive"/>
                        <div className={props.sticker === 'recordPlane' ? `${styles.planeSticker}` : `${styles.recordSticker}` }>
                            <Image src={props.sticker === 'recordPlane' ? recordPlane : fastRecord } alt={props.stickerAlt} width={400} height={400} layout="responsive"/>
                        </div>
                </div>
                <div className={styles.lowerCont} >
                    <div className={styles.blurb}>
                        < ContainerTag color={props.tagColor} border={props.tagBorder} content={props.tagContent} />
                        <h2>{props.headerContent}</h2>
                        <p>{props.blurbContent}</p>
                    </div>
                    <div className={styles.footerButtons}>
                            <StyledButton content={props.topButtonContent} color={props.topButtonColor} bgColor={props.topButtonBgColor} />
                            <StyledButton content={props.bottomButtonContent} color={props.bottomButtonColor} border={props.bottomButtonBorder} />
                    </div>
                </div>
            </section>
       </SectionWrapper>
    )
}

export default ImageSection