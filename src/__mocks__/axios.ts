const axios = {
  post: jest.fn(),
  create: () => axios,
};

export default axios;
