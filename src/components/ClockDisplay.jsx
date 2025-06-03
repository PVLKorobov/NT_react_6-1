import Clock from "./Clock"
import styles from './ClockDisplay.module.css'


export default function ClockDisplay({clockMap, removeClockCallback, currentTime}) {
    return (
        <ul className={styles['clock-display']}>
            {[...clockMap.entries()].map(([timezone, clockData]) => (
                <li key={timezone}>
                    <Clock 
                    name={clockData.name} 
                    time={currentTime.clone().add(clockData.timeOffset, 'minutes')} 
                    timezone={timezone} 
                    removeClockCallback={removeClockCallback}
                    />
                </li>
            ))}
        </ul>
    )
}