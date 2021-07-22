import styles from './SectionWrapper.module.scss';

const SectionWrapper = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.bgImg})`}} className={styles.container}>
            {props.children}
        </div>
    )
}

export default SectionWrapper