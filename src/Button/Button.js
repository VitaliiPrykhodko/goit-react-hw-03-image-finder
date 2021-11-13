import styles from "./Button.module.css"

const Button = ({onClick}) => {
    return (
        <button onClick={onClick} className={styles.btn}>Load more</button>
    )
}

export {Button}