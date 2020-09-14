import axios from 'axios';

export const getTeacherList = (params: {}) => {
  return axios
    .get(`/api/v1/teacher/page`, {
      params,
    })
    .then((res) => res.data as any);
};

export const delTeacher = (id: number) => {
  return axios.delete(`/api/v1/teacher/${id}`).then((res) => res.data as any);
};

export const updateTeacher = (data: { id: number; teacherName: string }) => {
  return axios.put(`/api/v1/teacher/${data.id}`, { teacherName: data.teacherName }).then((res) => res.data as any);
};

export const addTeacher = (name: string) => {
  return axios.post(`/api/v1/teacher`, { teacherName: name }).then((res) => res.data as any);
};
