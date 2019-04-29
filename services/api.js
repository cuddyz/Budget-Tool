import axios from 'axios'

const apiPath = 'api'

async function list(queryParams) {
  return axios.get(`${apiPath}/${this.path}`, { params: { ...queryParams } })
}

async function show(id) {
  return axios.get(`${apiPath}/${this.path}${id}`)
}

async function create(body) {
  return axios.post(`${apiPath}/${this.path}`, body)
}

async function update(id, body) {
  return axios.put(`${apiPath}/${this.path}/${id}`, body)
}

async function del(id) {
  return axios.delete(`${apiPath}/${this.path}/${id}`)
}

function setPath (pathParam) {
  return {
    path: pathParam,
    list,
    show,
    create,
    update,
    delete: del
  }
}

export const entries = setPath('entries')
