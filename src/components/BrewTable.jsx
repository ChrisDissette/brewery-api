import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

const BrewTable = (props) => {

    const {breweries, resetHandler} = props

    return (
        <div>
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' px={{xs:6, sm:7, md:8, lg:10}}>
                <TableContainer>
                    <Table>
                        <TableHead sx={{bgcolor:'secondary.main'}}>
                            <TableRow>
                                <TableCell sx={{color:'white'}}>
                                    Brewery Name
                                </TableCell>
                                <TableCell sx={{color:'white'}}>
                                    Brewery City
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                breweries.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button sx={{my:5, width:[200,250,300,400]}} variant='contained' color='error' onClick={resetHandler}>Reset</Button>
            </Box>
        </div>
    )
}

export default BrewTable
