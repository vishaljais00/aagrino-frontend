import { auth } from '@/firebase/firebase';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

interface UserState {
  username: string | null;
  email: string | null;
  pic: string | null;
}

interface userData {
  data: UserState | null;
  loading: boolean;
  error: string | null;
}

const initialState: userData = {
  data: null,
  loading: true,
  error: null
};

export const signInWithGoogle = createAsyncThunk(
  "user/signInWithGoogle",
  async (arg, thunkAPI) => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((res) => {
        const currentUser = {
          username: res.user.displayName,
          email: res.user.email,
          pic: res.user.photoURL,
          password: res.user.uid
        }
        console.log('JSS log currentUser:', currentUser)
        thunkAPI.dispatch(userSuccess(currentUser));
      }).catch((err) => {
      }).catch((err) => {
        thunkAPI.dispatch(userFailure(err.message));
      })
  }
)


export const logOutAsync = createAsyncThunk(
  'user/logOut',
  async (arg, thunkAPI) => {
    signOut(auth)
      .then(() => {
        console.log("signed out successfully ! ");
        thunkAPI.dispatch(clearUser());
      }).catch((err) => {

      })
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userStart: (state) => {
      state.loading = true
    },
    userSuccess: (state, action: PayloadAction<UserState>) => {
      state.data = action.payload;
      state.loading = false;
    },
    userFailure: (state, action: PayloadAction<string>) => {
      state.data = null;
      state.loading = false;
      state.error = action.payload;
    },

    clearUser: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },

  },
});

export const { userStart, userSuccess, userFailure, clearUser } = userSlice.actions;
export default userSlice.reducer;


