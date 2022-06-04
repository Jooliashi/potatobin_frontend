import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { useState, useEffect } from 'react'
import endpointService from '../services/endpoints'
import { Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RequestDisplay = ({ endpoint }) => {
  const [requests, setRequests] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    endpointService
      .getAll()
      .then(allRequests => {
        setRequests(allRequests)
      }).catch(error => {
        setErrorMessage('No such potato bin!')
      })
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
      <Typography variant="h4">{errorMessage}</Typography>
      {requests.map(request =>
        <Accordion key={uuid()}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            // maybe change to time?
            <Typography>Request Method: {request.requestMethod} | Request IP: {request.requestIp}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Headers:
              {Object.keys(request.headers).map(headerKey =>
                <Typography key={uuid()}>{headerKey}: {request.headers.headerKey}</Typography>
              )}
            </Typography>
          </AccordionDetails>
        </Accordion>
              <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
      )}
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