import axios from 'axios'
import {useState} from 'react'
import BrewTable from './components/BrewTable'
import Form from './components/Form'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'

import Typography from '@mui/material/Typography';

function App() {

  const [breweries, setBreweries] = useState([])
  const [city, setCity] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const fetchBreweryInfo = event => {
    if(city.length === 0){
      console.log('validation')
      return
    } else {
    setSubmitted(true)
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then(res => {
        console.log(res.data)
        setBreweries(res.data)
      })
      .catch (err => console.log(err))
    }
  }

  const resetHandler = () => {
    setSubmitted(false)
    setBreweries([])
  }

  return (
    <div className="App">
      <Box minHeight='100vh'>
        <Typography fontWeight='bold' textAlign='center' variant='h1' sx={{mt:10, mb:3}}>Brewery API</Typography>
        <Typography variant='h4' textAlign='center'>Enter a city to view local breweries!</Typography>
        <Form setCity={setCity} fetchBreweryInfo={fetchBreweryInfo} />
        {
          submitted ?
          <BrewTable breweries={breweries} resetHandler={resetHandler} />
          : ''
        }
      </Box>
    </div>
  );
}

export default App;
