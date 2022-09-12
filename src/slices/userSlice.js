import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    cuit: 0,
    accessToken: "",
		voteCertificate: "",
  },
  reducers: {
    setUser: (state, action) => {
			state.name=action.payload.name,
			state.cuit=action.payload.cuit,
			state.accessToken=action.payload.access_token
			state.voteCertificate=action.payload.vote_certificate
    },

    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
