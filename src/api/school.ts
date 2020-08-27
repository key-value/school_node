import axios from 'axios'

export const getTeacherList = (params: {}) => {
    return axios.get(`/api/v1/teacher`, {
        params,
      })
      .then((res) => res.data as any);
  };