import { useState } from 'react'
import moment from 'moment-timezone'
import InputForm from './components/InputForm'
import ClockDisplay from './components/ClockDisplay'
import './App.css'


function App() {
  const [currentTime, setCurrentTime] = useState(moment().tz('Europe/Moscow'))
  const [clockRegistry, setClockRegistry] = useState(new Map())
  const mskOffset = moment.tz('Europe/Moscow').utcOffset()


  var timeTickInterval = setInterval(() => {
    setCurrentTime(moment().tz('Europe/Moscow'))
  }, 1000)


  function addClock(name, timezone) {
    if (!clockRegistry.has(timezone)) {
      const timezoneOffset = moment.tz(timezone).utcOffset() - mskOffset
      setClockRegistry(currentRegistry => {
        currentRegistry.set(timezone, {name: name, timeOffset: timezoneOffset})
        return new Map(currentRegistry)
      })
      return true
    } else {
      return false
    }
  }

  function removeClock(timezone) {
    if (clockRegistry.has(timezone)) {
      setClockRegistry(currentRegistry => {
        currentRegistry.delete(timezone)
        return new Map(currentRegistry)
      })
    }
  }

  addClock('Moscow', 'Europe/Moscow')
  return (
    <div className='contents'>
      <InputForm addClockCallback={addClock}/>
      <ClockDisplay 
      clockMap={clockRegistry} 
      removeClockCallback={removeClock} 
      currentTime={currentTime}
      />
    </div>
  )
}

export default App
