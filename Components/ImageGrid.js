import styles from './ImageGrid.module.scss';
import image_grid1 from '../public/static/image_grid1.jpeg';
import image_grid2 from '../public/static/image_grid2.jpeg';
import image_grid3 from '../public/static/image_grid3.jpeg';
import image_grid4 from '../public/static/image_grid4.jpeg';
import image_grid5 from '../public/static/image_grid5.jpeg';
import image_grid6 from '../public/static/image_grid6.jpeg';
import image_grid7 from '../public/static/image_grid7.jpeg';

const ImageGrid = () => {
    const images = [ image_grid1, image_grid2, image_grid3, image_grid4, image_grid5, image_grid6, image_grid7, ];

    const GridCard = (props) => {
        return (
            <div className={styles.card}>
                <a href="#">
                    <img className={styles.cardImage} src={`${props.bgImage.src}`} />
                </a>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {   images.map((image, i) => {
                    return ( <GridCard key={i} bgImage={image} />
            )})
            }
            <div className={styles.card} >
                <a className={styles.lastCard} href="#">
                    <h4>don't miss a release</h4>
                    <p>follow @qrates on instagram</p>
                </a>
            </div>
        </div>
    )
}

export default ImageGrid