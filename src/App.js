import { useState } from 'react'
import endpointService from './services/endpoints'
import Home from './components/Home'
import LinkOptions from './components/LinkOptions'
import RequestDisplay from './components/RequestDisplay'
import Header from './components/Header'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Grid, Box } from '@mui/material'

const App = () => {
  const [endpoint, setEndpoint] = useState('')
  const [endpointCreated, setEndpointCreated] = useState(false)
  const [copyClickLabel, setCopyClickLabel] = useState('Copy Link')

  const handleCreateBinClick = (event) => {
    event.preventDefault()
    // endpointService
    //   .create()
    //   .then(response => {
    //     setEndpoint(response.endpointId)
    //   })
    let endpoint = 'abcde1'
    setEndpoint(endpoint)
    setEndpointCreated(true)
  }

  const handleCopyClick = async (event) => {
    event.preventDefault()
    await navigator.clipboard.writeText(`http://potatobin.com/${endpoint}`)
    setCopyClickLabel('Link Copied!')
  }

  const navigate = useNavigate()
  const handleEndpointClick = (event) => {
    event.preventDefault()
    setEndpointCreated(false)
    navigate(`/${endpoint}`)
  }

  return (
    <Box m={2} pt={5}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        direction="column"
        pt={3}
      >
        <Header />
        <Routes>
          <Route path="/:id" element={<RequestDisplay />} />
          <Route path="/" element={endpointCreated ?
            <LinkOptions
              endpoint={endpoint}
              handleCopyClick={handleCopyClick}
              copyClickLabel={copyClickLabel}
              handleEndpointClick={handleEndpointClick}
            /> :
            <Home handleCreateBinClick={handleCreateBinClick} />}
          />
        </Routes>
      </Grid>
    </Box>
  )
}

export default App
