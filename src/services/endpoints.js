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

const exported = { getAll, create }
export default exported
