import { createSlice } from "@reduxjs/toolkit";
import User from "../../models/User";

const userSlice = createSlice({
  name: "user",
  initialState: { user: User },
  reducers: {
    setUser: {
      reducer(state, action) {
        state.user = {
          userinfo: {
            username: action.payload.user.name,
            email: action.payload.user.email,
            bio: action.payload.user.bio,
            photo: action.payload.user.avatar_url,
            login: action.payload.user.login,
            repos: action.payload.user.public_repos,
            followers: action.payload.user.followers,
            following: action.payload.user.following,
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
      },

      prepare({ user }) {
        return { payload: { user } };
      },
    },

    setRepos: {
      reducer(state, action) {
        const { type, repos, totalPagesMatch } = action.payload;
        state.user[type] = repos;
        state.user[type].pagination.total = totalPagesMatch
          ? +totalPagesMatch[1]
          : state.user[type].pagination.total;
        state.user[type].pagination.total_itens =
          type === "repos" ? state.user.userinfo.public_repos : "";
      },
      prepare({ repos, type, totalPagesMatch }) {
        return { payload: { repos, type, totalPagesMatch } };
      },
    },
  },
});

export const { setUser, setRepos } = userSlice.actions;

export default userSlice.reducer;
