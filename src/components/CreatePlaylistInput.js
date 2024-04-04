import { Container, Slider, Input, makeStyles, Typography } from '@material-ui/core'
import { React, useState } from 'react'

// TODO Add input for playlist creation query parameters
// User slider with input all from 0-10, allowing for one decimal place
function CreatePlaylistInput({title}) {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = useState('')
  const [periodCount, setPeriodCount] = useState(0)
  const [inputString, setInputString] = useState('')
    
  const handleInputChange = (event) => {
    event.preventDefault()
    let value = event.target.value
    if (value === '') {
      setSliderValue(value)
    } else if (!isNaN(value) && value.length <= 3 && !(value.length > 2 && value.startsWith("."))) {
      let valueNum = parseFloat(value, 10)
      if (valueNum >= 0 && valueNum <= 10) {
        setSliderValue(valueNum)
      }
    } else {
      setInputString(inputString.substring(0, inputString.length - 1))
    }
  }

  const handleInputkeyPress = (event) => {
    if ((isNaN(event.key) && event.key !== "Backspace" && event.key !== "." ) ||
        (event.target.value.includes("0") && event.key === "0")) {
      event.preventDefault()
    } else if (event.key === ".") {
      if (periodCount > 0) {
        event.preventDefault()
      } else {
        setPeriodCount(periodCount + 1)
        setInputString(inputString.concat(event.key))
      }
    } else if (inputString === "0") {
      setSliderValue("")
    } else if (event.key === "Backspace") {
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
      <Container>
        <Typography>{title}</Typography>
      </Container>
      <Container className={classes.sliderInput}>
        <Slider
          className={classes.slider}
          value={typeof sliderValue === 'number' ? sliderValue : 0}
          onChange={(event, newValue) => setSliderValue(newValue)}
          min={0}
          max={10}
          step={0.1}
        />
        <Input
          id={title.toLowerCase()}
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
    </Container>
  )
}

export default CreatePlaylistInput

const useStyles = makeStyles((theme) => ({
  sliderInput: {
    display: 'flex',
  },
  slider: {
    marginEnd: '2vw',
  },
}));