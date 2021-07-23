import styles from './SectionWrapper.module.scss';

const SectionWrapper = (props) => {
    return (
        <div style={{backgroundColor: props.bgColor}} className={styles.container}>
            {props.children}
        </div>
    )
}

export default SectionWrapper