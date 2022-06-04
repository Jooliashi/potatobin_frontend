import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { useState, useEffect } from 'react'
import endpointService from '../services/endpoints'
import { Typography } from '@mui/material'
// import { Divider } from 'react-native-elements'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { v4 } from 'uuid'

const RequestDisplay = ({ endpoint }) => {
  const [requests, setRequests] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    // endpointService
    //   .getAll()
    //   .then(allRequests => {
    //     setRequests(allRequests)
    //     setErrorMessage('')
    //   }).catch(error => {
    //     setErrorMessage('No such potato bin!')
    //   })

    // link, created_at, last_request_at, count, is_active
  }, [])

  // const dispatch = useDispatch()

  // if (!blog) {
  //   return null
  // }

  // const handleLikes = () => {
  //   incrementLikes(blog)
  // }

  // const handleRemoval = () => {
  //   if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
  //     removeBlog(blog)
  //   }
  // }

  // const addComment = async (blogId, newComment) => {
  //   const returnedBlog = await commentsService.create(blogId, newComment)
  //   dispatch(updateBlog(blogId, returnedBlog))
  //   return returnedBlog
  // }

  return (
    <>
      {errorMessage !== '' ?
        <Typography variant="h4">{errorMessage}</Typography> :
        <>
          <Typography variant="h6">Link: {`http://potatobin.com/${endpoint}`}</Typography>
          <hr style={{height: 1, width: '50vw', borderColor: '#412a1a', backgroundColor: '#412a1a'}} />
          {/* <hr
              style={{
                  color: 'black',
                  backgroundColor: 'black',
                  borderColor: 'black',
                  height: 5
              }}
          /> */}
          {/* <Divider spacing={10} /> */}
          <Typography variant="h4">Potatoes in your bin:</Typography>
          <hr style={{height: 0.5}} />
          {requests.map(request =>
            <Accordion sx={{width: '50vw'}} key={v4()}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Request Method: {request.requestMethod} | Request IP: {request.requestIp}</Typography>
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
                <Typography>
                  {request.payload}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </>
      }
    </>
    // <div>

    // </div>
    // <div className='blog-details' id={blog.title}>
    //   <h2>{blog.title} {blog.author}</h2>
    //   <div>{blog.url}</div>
    //   <div>
    //     {blog.likes} likes
    //     <button id='like-button' onClick={handleLikes}>like</button>
    //   </div>
    //   <div>added by {blog.user.name}</div>
    //   {currentUser.username === blog.user.username ?
    //     <button id='remove-button' onClick={handleRemoval}>remove</button> :
    //     ''}
    //   <h3>comments</h3>
    //   <CommentForm blogId={blog.id} createComment={addComment} />
    //   {blog.comments.length > 0 ?
    //     <ListGroup variant="flush">
    //       {blog.comments.map(comment =>
    //         <ListGroup.Item key={comment}>{comment}</ListGroup.Item>
    //       )}
    //     </ListGroup>
    //     : <div>No comments</div>
    //   }
    // </div>
  )
}

export default RequestDisplay