import axios from 'axios';

export const instance = axios.create({ baseURL: 'http://localhost:3000', })

export const METHODS = {
  POST: 'post',
  GET: 'get',
  DELETE: 'delete',
  PUT: 'put',
  PATCH: 'patch',
}

