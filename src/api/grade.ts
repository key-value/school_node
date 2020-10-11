import axios from 'axios';

const modules = 'grade';

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

export const update = (data: { id: number; gradeNum: number; sign: string }) => {
  return axios.put(`/api/v1/${modules}/${data.id}`, { gradeNum: data.gradeNum, sign: data.sign }).then((res) => res.data as any);
};

export const add = (gradeNum: number, sign: string) => {
  return axios.post(`/api/v1/${modules}`, { gradeNum: gradeNum, sign: sign }).then((res) => res.data as any);
};
