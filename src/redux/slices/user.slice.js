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
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
