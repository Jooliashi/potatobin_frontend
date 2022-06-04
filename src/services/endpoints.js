import axios from 'axios'
const baseUrl = '/api/endpoints'

export const getAll = (id) => {
  const request = axios.get(`${baseUrl}/${id}/requests`)
  return request.then(response => response.data)
}

export const create = () => {
  const request = axios.post(baseUrl)
  return request.then(response => response.data)
}
