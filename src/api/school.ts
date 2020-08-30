import axios from 'axios';

export const getTeacherList = (params: {}) => {
  return axios
    .get(`/api/v1/teacher/page`, {
      params,
    })
    .then((res) => res.data as any);
};

export const delTeacherList = (id: number) => {
  return axios.delete(`/api/v1/teacher/${id}`).then((res) => res.data as any);
};

export const updateTeacherList = (id: number, name: string) => {
  return axios.put(`/api/v1/teacher/${id}`, { name }).then((res) => res.data as any);
};

export const addTeacherList = (name: string) => {
  return axios.post(`/api/v1/teacher`, { name }).then((res) => res.data as any);
};
