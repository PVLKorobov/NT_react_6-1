import Clock from "./Clock"
import styles from './ClockDisplay.module.css'


export default function ClockDisplay({clockMap, removeClockCallback, currentTime}) {
    return (
        <ul className={styles['clock-display']}>
            {[...clockMap.entries()].map(([offset, clockData]) => (
                <li key={offset}>
                    <Clock 
                    name={clockData.name} 
                    time={currentTime.clone().add(clockData.timeOffset, 'hours')} 
                    offset={offset} 
                    removeClockCallback={removeClockCallback}
                    />
                </li>
            ))}
        </ul>
    )
}