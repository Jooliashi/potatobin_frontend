// import { Button } from 'react-bootstrap'
// import Button from '@mui/material/Button'
import { Button, Grid, Box } from '@mui/material'
import logo from '../static/images/potato.png'

const Home = ({ handleCreateBinClick }) => {
  return (
    <>
      <Box
        component="img"
        sx={{ width: 1/5 }}
        alt="potato"
        src={logo}
      />
      <Grid item xs={4}>
        <Button size = "large" color = "primary" variant="contained" onClick={handleCreateBinClick}>Create New Potato Bin!</Button>
      </Grid>
    </>
  )
}

export default Home