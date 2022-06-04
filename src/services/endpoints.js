import axios from 'axios'
const baseUrl = '/api/endpoints'

const getAll = (id) => {
  const request = axios.get(`${baseUrl}/${id}/requests`)
  return request.then(response => response.data)
}

const create = () => {
  const request = axios.post(baseUrl)
  return request.then(response => response.data)
}

export default {getAll, create}


// Use cases:
// Get all requests:
// 	GET /api/endpoints/:endpoint_id/requests
//     return JSON (of an array of all requests matching an endpoint)
//     (or return 404 (endpointID not found))

// Add new bin:
// 	POST /api/endpoints
// 	dbService.createEndpoint();
// 	return JSON like { endpointId: '27w513e98dj' }
// We’re expecting a request from the FE to POST /api/endpoints and that will trigger the BE to make a new bin (including its endpointId—the unique string for its URL) and return that bin’s endpointId. Is that what you’re asking?