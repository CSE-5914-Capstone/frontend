import { Container, Slider, Input } from '@material-ui/core'
import { React, useState } from 'react'

// TODO Add input for playlist creation query parameters
// User slider with input all from 0-10, allowing for one decimal place
function CreatePlaylistInput() {
  const [sliderValue, setSliderValue] = useState('')
  const [periodCount, setPeriodCount] = useState(0)
  const [inputString, setInputString] = useState('')
  
  // TODO finish input sanitation - allow leading zero only for decimal < 1
  
  const handleInputChange = (event) => {
    event.preventDefault()
    let value = event.target.value
    // console.log("value: ", value)
    if (value === '') {
      setSliderValue(value)
    } else if (!isNaN(value) && value.length <= 3) {
      let valueNum = parseFloat(value, 10)
      // console.log("valueNum: ", valueNum)
      if (valueNum >= 0 && valueNum <= 10) {
        setSliderValue(valueNum)
      }
    }
  }

  const handleInputkeyPress = (event) => {
    // console.log("sliderValue: ", sliderValue)
    // console.log("event.key: ", event.key)
    if ((isNaN(event.key) && event.key !== "Backspace" && event.key !== "." ) ||
        (event.target.value.includes("0") && event.key === "0")) {
      event.preventDefault()
    } else if (event.target.value === "0") {
      setSliderValue("")
    } else if (event.key === ".") {
      // console.log("event.key === '.'")
      // console.log("periodCount: ", periodCount)
      if (periodCount > 0) {
        event.preventDefault()
      } else {
        setPeriodCount(periodCount + 1)
        setInputString(inputString.concat(event.key))
      }
    } else if (event.key === "Backspace") {
      // console.log("event.key === Backspace")
      // console.log("periodCount: ", periodCount)
      // console.log("inputString: ", inputString)
      if (inputString.endsWith(".")) {
        setPeriodCount(periodCount - 1)
      }
      setInputString(inputString.substring(0, inputString.length - 1))
    } else {
      setInputString(inputString.concat(event.key))
    }
  }
  
  return (
    <Container>
      <Slider
        value={typeof sliderValue === 'number' ? sliderValue : 0}
        onChange={(event, newValue) => setSliderValue(newValue)}
        min={0}
        max={10}
        step={0.1}
      />
      <Input
        value={sliderValue}
        onChange={handleInputChange}
        onKeyDown={handleInputkeyPress}
        pattern={'[0-9]*'}
        itemType='number'
        inputProps={{
          min: 0,
          max: 10,
          step: 0.1,
          type: 'number',
        }}
      />
    </Container>
  )
}

export default CreatePlaylistInput