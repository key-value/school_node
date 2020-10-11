import axios from 'axios';

const modules = 'glass';

export const getList = (params: {}) => {
  return axios
    .get(`/api/v1/${modules}/page`, {
      params,
    })
    .then((res) => res.data as any);
};

export const del = (id: number) => {
  return axios.delete(`/api/v1/${modules}/${id}`).then((res) => res.data as any);
};

export const update = (data: { id: number; glassName: string; gradeId: number }) => {
  return axios.put(`/api/v1/${modules}/${data.id}`, { glassName: data.glassName, gradeId: data.gradeId }).then((res) => res.data as any);
};

export const add = (data: { id: number; glassName: string; gradeId: number }) => {
  return axios.post(`/api/v1/${modules}`, data).then((res) => res.data as any);
};

export const getListAndGrade = (params: { page: number; size: number }) => {
  return axios
    .get(`/api/v1/${modules}/grade`, {
      params,
    })
    .then((res) => res.data as any);
};
