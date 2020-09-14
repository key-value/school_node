import axios from 'axios';

const modules = 'schedule';

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

export const update = (data: { id: number; glassId: number; subjectId: number; teacherId: number }) => {
  return axios.put(`/api/v1/${modules}/${data.id}`, { glassId: data.glassId }).then((res) => res.data as any);
};

export const add = (data: { glassId: number; subjectId: number; teacherId: number }) => {
  return axios.post(`/api/v1/${modules}`, data).then((res) => res.data as any);
};
