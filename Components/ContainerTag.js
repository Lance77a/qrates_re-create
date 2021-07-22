import styles from './ContainerTag.module.scss';

const ContainerTag = (props) => {
    return (
        <div style={{ color: props.color, border: props.border }} className={styles.tagCont}>
            <p>{props.content}</p>
        </div>
    )
}

export default ContainerTag
