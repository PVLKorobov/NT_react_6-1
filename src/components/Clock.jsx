import styles from './Clock.module.css'
import closeIcon from '../assets/close.svg'


export default function Clock({name, time, offset, removeClockCallback}) {
    return (
        <div className={styles.clock__wrapper}>
            <div className={styles.info__wrapper}>
                <h2 className={styles.info__name}>{name}</h2>
                <h1 className={styles.info__time}>{time.format('HH:mm:ss')}</h1>
            </div>
            <button className={styles['remove-button']} onClick={(e) => {removeClockCallback(offset)}}>
                <img src={closeIcon} />
            </button>
        </div>
    )
}