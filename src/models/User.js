const User = {
  userinfo: {
    username: null,
    photo: null,
    login: null,
    repos: null,
    followers: null,
    following: null,
  },
  repos: {
    repos: [],
    pagination: {
      total: 1,
      activePage: 1,
    },
  },
  starred: {
    repos: [],
    pagination: {
      total: 1,
      activePage: 1,
    },
  },
};

export default User;
