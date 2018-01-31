import request from '../utils/request';
import qs from 'qs';

export async function query(payload) {
  return request(`/api/resource/users/?${qs.stringify(payload)}`)
}

export async function create(payload) {
  return request(`/api/resource/create/`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export async function delete_r(payload) {
  return request(`/api/resource/delete/?${qs.stringify(payload)}`)
}

export async function update(payload) {
  return request(`/api/resource/update/`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
