import axios from 'axios';

const modules = 'subject';

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

export const update = (data: { id: number; subjectName: string }) => {
  return axios.put(`/api/v1/${modules}/${data.id}`, { subjectName: data.subjectName }).then((res) => res.data as any);
};

export const add = (name: string) => {
  return axios.post(`/api/v1/${modules}`, { subjectName: name }).then((res) => res.data as any);
};
