import { Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material'
import { useState, useEffect } from 'react'
import endpointService from '../services/endpoints'
import { Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { v4 } from 'uuid'
import { useParams } from 'react-router-dom'

const RequestDisplay = () => {
  const [requests, setRequests] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [requestDetail, setRequestDetail] = useState({})
  const endpoint = useParams().id
  
  useEffect(() => {
    endpointService
    .getRequestDetail(endpoint)
    .then(detail => {
      setRequestDetail(detail)
      setErrorMessage('')
    }).catch(error => {
      setErrorMessage('No such potato bin!')
    })

    if (Object.keys(requestDetail).length !== 0) {
      endpointService
      .getAll(endpoint)
      .then(allRequests => {
        setRequests(allRequests)
        setErrorMessage('')
      }).catch(error => {
        setErrorMessage('No Requests Yet!')
      })
    }
    // let requestsExample = [
    //   {requestMethod: 'POST', requestIp: '111.111', headers: {'Host': 'Cookie Monster', 'Accept-Language': 'en-US', 'Content-Type': 'application/json', 'Content-Length': 500}, payload: 'I love potatoes and cooookiieeees!', endpointId: 'abcde1'},
    //   {requestMethod: 'POST', requestIp: '222.222', headers: {'Host': 'Oscar the Grouch', 'Content-Type': 'application/json', 'Content-Length': 1000}, payload: 'trash trash trash I love trash', endpointId: 'abcde1'},
    //   {requestMethod: 'POST', requestIp: '333.333', headers: {'Host': 'Big Bird', 'Accept-Language': 'en-US', 'Content-Type': 'application/json', 'Content-Length': 900}, payload: 'PO-TAE-TOEEEEE', endpointId: 'abcde1'}
    // ];
    // setRequests(requestsExample)
  }, [endpoint])

  return (
    <>
      {errorMessage !== '' ?
        <Typography variant="h4">{errorMessage}</Typography> :
        <>
          <Typography variant="h6">Link: {`http://potatobin.com/${endpoint}`}</Typography>
          <Box
            sx={{ 
              height: '300',
              backgroundColor: '#f2a45a',
              padding: '5px'
             }}
          >
            {Object.keys(requestDetail).map(title =>
                  title === "is_active" ? 
                    <Typography key={v4()}>{title}: true </Typography> :
                    <Typography key={v4()}>{title}: {requestDetail[title]}</Typography>
            )}
          </Box>
          <hr style={{height: 1, width: '50vw', borderColor: '#412a1a', backgroundColor: '#412a1a'}} />
          <Typography variant="h4">Potatoes in your bin:</Typography>
          <hr style={{height: 0.5}} />
          {requests.map(request =>
            <Accordion sx={{width: '50vw'}} key={v4()}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography><span style={{color: 'red'}}>{request.requestMethod}</span> | Request IP: {request.requestIp}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5">
                  Headers:
                </Typography>
                {Object.keys(request.headers).map(headerKey =>
                  <Typography key={v4()}>{headerKey}: {request.headers[headerKey]}</Typography>
                )}
                <hr style={{height: 0.5}} />
                <Typography variant="h5">
                  Body:
                </Typography>
                  {Object.keys(request.payload).map(payloadKey =>
                    <Typography key={v4()}>{payloadKey}: {request.payload[payloadKey]}</Typography>
                  )}
              </AccordionDetails>
            </Accordion>
          )}
        </>
      }
    </>
  )
}

export default RequestDisplay
