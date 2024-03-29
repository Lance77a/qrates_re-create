import styles from './CarouselSection.module.scss';
import { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import ContainerTag from './ContainerTag';
import StyledButton from './StyledButton';
import Image from 'next/image';
import slide_1 from '../public/static/slide_1.png';
import slide_2 from '../public/static/slide_2.png';
import slide_3 from '../public/static/slide_3.png';
import slide_4 from '../public/static/slide_4.png';
import slide_5 from '../public/static/slide_5.png';
import slide_6 from '../public/static/slide_6.png';
import cashSticker from '../public/static/cash_sticker.png';
import starSticker from '../public/static/star_sticker.png';

const CarouselSection = () => {
    const [index, setIndex] = useState(1);
    const [sticker, setSticker] = useState(false)
    const images = [ slide_1, slide_2, slide_3, slide_4, slide_5, slide_6 ]
    
    useEffect(() => {
        let counter = 1
        const interval = setInterval(() => {
                if(counter < images.length){
                    setIndex(counter);
                    return counter++;
                }
                else {
                    setIndex(0);
                    return counter = 1;
                }
        }, 1000);
            return () => clearInterval(interval);
      }, []);

      useEffect(() => {
          const stickerInterval = setInterval(() => {
              setSticker(prev => prev === sticker && !sticker)
            }, 6000)
            return () => clearInterval(stickerInterval);
      }, []);

    return (
        <SectionWrapper bgColor='#000'>
            <section className={styles.container}>
                <div className={styles.header}>
                    <ContainerTag content='vinyl studio' color='#fff' border='2px solid white' />
                    <h2>Make it real with <span>Qrates Vinyl Studio</span></h2>
                    <p>Design the look and feel of your vinyl and use the profit calculator to
                        immediately see how much your project will cost, and how much you’ll earn.</p>
                </div>
                <div className={styles.carouselCont}>
                    <div className={styles.carouselImageCont}>
                        <Image src={images[index]} className={styles.carouselImage} alt='image carousel' width={700} height={700} fill='responsive' />
                    </div>
                    <div className={sticker === true ? `${styles.sticker}` : `${styles.sticker} ${styles.cashSticker}`} >
                        <Image src={cashSticker} alt='Black and white dollar sign sticker' />
                    </div>
                    <div className={sticker === false ? `${styles.sticker}` : `${styles.sticker} ${styles.starSticker}`} >
                        <Image src={starSticker} alt='Black and white star sticker' />  
                    </div>
                </div>
                <div className={styles.button}>
                    <StyledButton content='try it now' color='#000' bgColor='#FFF804' />
                </div>
            </section>
        </SectionWrapper>
    )
}



export default CarouselSection