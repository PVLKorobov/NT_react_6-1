import { useState } from "react";
import moment from "moment";
import styles from './InputForm.module.css'


export default function InputForm({addClockCallback}) {
    const [inputName, setInputName] = useState('')
    const [inputTimezone, setInputTimezone] = useState('')


    function isValidTimezone(timezone) {
        return Boolean(moment.tz.zone(timezone))
    }


    function handleFormSubmit(e) {
        e.preventDefault()
        if (isValidTimezone(inputTimezone) && inputName !== '') {
            if (addClockCallback(inputName, inputTimezone)) {
                setInputName('')
                setInputTimezone('')
            }
        }
    }


    return (
        <form className={styles['input-form']} onSubmit={handleFormSubmit}>
            <div className={styles.input__wrapper}>
                <label className={styles.input__label} htmlFor="nameInput">Название</label>
                <input className={styles.input__field} value={inputName} onChange={(e) => {setInputName(e.target.value)}} type="text" name="nameInput"/>
            </div>
            <div className={styles.input__wrapper}>
                <label className={styles.input__label} htmlFor="timezoneInput">Временная зона</label>
                <input className={styles.input__field} value={inputTimezone} onChange={(e) => {setInputTimezone(e.target.value)}} type="text" name="timezoneInput"/>
            </div>
            <button className={styles['submit-button']} type="submit">Добавить</button>
        </form>
    )
}