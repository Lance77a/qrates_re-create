import styles from './StyledButton.module.scss';

function StyledButton(props) {
    return (
        <div style={{background: props.bgColor, border: props.border}} className={styles.button}>
            <a style={{color: props.color}}>{props.content}</a>
        </div>
    )
}

export default StyledButton