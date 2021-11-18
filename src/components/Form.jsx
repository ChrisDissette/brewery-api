import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'

import Typography from '@mui/material/Typography';

const Form = (props) => {

    const {setCity, fetchBreweryInfo} = props

    return (
        <Box height='25vh' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <Input placeholder='Enter a City' onChange={(event) => {setCity(event.target.value)}} sx={{width:[200,250,300,400]}} />
            <Button sx={{mt:3, width:[200,250,300,400]}} variant='contained' onClick={fetchBreweryInfo}>Fetch!</Button>
        </Box>
    )
}

export default Form
