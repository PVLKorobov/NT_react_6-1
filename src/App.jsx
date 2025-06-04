import { useState } from 'react'
import moment from 'moment-timezone'
import InputForm from './components/InputForm'
import ClockDisplay from './components/ClockDisplay'
import './App.css'


function App() {
  const [currentTime, setCurrentTime] = useState(moment.utc())
  const [clockRegistry, setClockRegistry] = useState(new Map())


  setInterval(() => {
    setCurrentTime(moment().tz('Europe/Moscow'))
  }, 1000)


  function addClock(name, hoursOffset) {
    if (!clockRegistry.has(hoursOffset)) {
      setClockRegistry(currentRegistry => {
        currentRegistry.set(hoursOffset, {name: name, timeOffset: hoursOffset})
        return new Map(currentRegistry)
      })
      return true
    } else {
      return false
    }
  }

  function removeClock(hoursOffset) {
    if (clockRegistry.has(hoursOffset)) {
      setClockRegistry(currentRegistry => {
        currentRegistry.delete(hoursOffset)
        return new Map(currentRegistry)
      })
    }
  }

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
