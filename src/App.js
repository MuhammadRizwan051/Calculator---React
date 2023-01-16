import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import './App.css'

function App() {
  let [fieldVal, setFieldVal] = useState('')

  let getVal = (e) => {
    let value = fieldVal

    setFieldVal(value + e)
    // console.log(e)
  }

  let clear = () => {
    setFieldVal('')
  }

  let backspace = () => {
    // console.log(fieldVal)
    setFieldVal(fieldVal.slice(0, -1))
  }

  let calculate = () => {
    // console.log(fieldVal)
    let value = fieldVal
    setFieldVal(value + '=' + eval(fieldVal))
  }
  return (
    <>
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'grey' }}>
        <Box className='main' sx={{ backgroundColor: 'black', paddingTop: 4, paddingBottom: 3, paddingX: 2, borderRadius: 2 }}>
          <TextField value={fieldVal} sx={{ input: { color: 'white', fontSize: 22 }, width: '100%', backgroundColor: '#242831', marginBottom: 2 }} />
          <Box sx={{ width: '100%', display: 'flex' }}>
            <div className='btn' onClick={clear} style={{ cursor: 'pointer', width: '24%', backgroundColor: '#D2001A', color: 'white', margin: 5, textAlign: 'center', fontSize: 25, paddingTop: 10, paddingBottom: 10, borderRadius: 5 }}>C</div>
            <div className='btn' onClick={backspace} style={{ cursor: 'pointer', width: '52%', backgroundColor: '#D2001A', color: 'white', margin: 5, textAlign: 'center', fontSize: 22, paddingTop: 10, paddingBottom: 10, borderRadius: 5 }}>Backspace</div>
            <div className='btn' onClick={() => getVal('/')} style={{ cursor: 'pointer', width: '24%', backgroundColor: '#D2001A', color: 'white', margin: 5, textAlign: 'center', fontSize: 25, paddingTop: 10, paddingBottom: 10, borderRadius: 5 }}>&divide;</div>
          </Box>
          <Box sx={{ width: '100%', display: 'flex' }}>
            <div className='num' onClick={() => getVal(7)}>7</div>
            <div className='num' onClick={() => getVal(8)}>8</div>
            <div className='num' onClick={() => getVal(9)}>9</div>
            <div className='symbol' onClick={() => getVal('*')}>&times;</div>
          </Box>
          <Box sx={{ width: '100%', display: 'flex' }}>
            <div className='num' onClick={() => getVal(4)}>4</div>
            <div className='num' onClick={() => getVal(5)}>5</div>
            <div className='num' onClick={() => getVal(6)}>6</div>
            <div className='symbol' onClick={() => getVal('-')}>&ndash;</div>
          </Box>
          <Box sx={{ width: '100%', display: 'flex' }}>
            <div className='num' onClick={() => getVal(1)}>1</div>
            <div className='num' onClick={() => getVal(2)}>2</div>
            <div className='num' onClick={() => getVal(3)}>3</div>
            <div className='symbol' onClick={() => getVal('+')}>+</div>
          </Box>
          <Box sx={{ width: '100%', display: 'flex' }}>
            <div className='btn' onClick={() => getVal('.')} style={{ cursor: 'pointer', width: '24%', backgroundColor: '#242831', color: 'white', margin: 5, textAlign: 'center', fontSize: 25, paddingTop: 17, paddingBottom: 17, borderRadius: 5 }}>.</div>
            <div className='btn' onClick={() => getVal(0)} style={{ cursor: 'pointer', width: '24%', backgroundColor: '#242831', color: 'white', margin: 5, textAlign: 'center', fontSize: 25, paddingTop: 17, paddingBottom: 17, borderRadius: 5 }}>0</div>
            <div className='btn' onClick={calculate} style={{ cursor: 'pointer', width: '52%', backgroundColor: '#D2001A', color: 'white', margin: 5, textAlign: 'center', fontSize: 25, paddingTop: 17, paddingBottom: 17, borderRadius: 5 }}>=</div>
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default App