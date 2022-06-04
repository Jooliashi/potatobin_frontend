import { Button, Grid } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material'

const LinkOptions = ({ endpoint, handleCopyClick, copyClickLabel, handleEndpointClick }) => {
  return (
    <>
      <Typography variant="h4">
        Send potatoes (a.k.a. requests) to this link:
      </Typography>
      <Typography variant="h6">
        http://potatobin.com/{endpoint}
      </Typography>
      <Grid item xs={4}>
        <Button startIcon={<ContentCopyIcon />} variant="contained" onClick={handleCopyClick}>{copyClickLabel}</Button>
      </Grid>
      <Grid item xs={4}>
        <Button endIcon={<SendIcon />} variant="contained" onClick={handleEndpointClick}>See the potatoes in your bin!</Button>
      </Grid>
    </>
  )
}

export default LinkOptions
