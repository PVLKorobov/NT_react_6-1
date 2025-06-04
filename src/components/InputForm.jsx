import { useState } from "react";
import styles from './InputForm.module.css'


export default function InputForm({addClockCallback}) {
    const [inputName, setInputName] = useState('')
    const [inputOffset, setInputOffset] = useState('')


    function handleFormSubmit(e) {
        e.preventDefault()
        if (inputOffset !== '' && inputName !== '') {
            if (addClockCallback(inputName, inputOffset)) {
                setInputName('')
                setInputOffset('')
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
                <label className={styles.input__label} htmlFor="offsetInput">Временная зона</label>
                <input className={styles.input__field} value={inputOffset} onChange={(e) => {setInputOffset(e.target.value)}} type="number" name="offsetInput"/>
            </div>
            <button className={styles['submit-button']} type="submit">Добавить</button>
        </form>
    )
}