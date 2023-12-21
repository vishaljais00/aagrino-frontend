import { BASEURL } from '@/app/constants';
import { auth } from '@/firebase/firebase';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

interface UserState {
  username: string | null;
  email: string | null;
  token: string | null;
  pic: string | null;
}

interface UserForm {
  email: string;
  password: string;
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
          token: null,
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

export const signinmanually = createAsyncThunk(
  "user/signinmanually",
  async ({ email, password }: UserForm, { rejectWithValue , dispatch }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(
        `${BASEURL}auth/login`,
        { email, password },
        config
      )
      const currentUser = {
        username: email.split('@')[0],
        email: email,
        token: res.data.accessToken,
        pic: null,
      }
      dispatch(userSuccess(currentUser))
      toast.success("User login successfully")
    } catch (error: any) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        dispatch(userFailure(error.response.data.message))
        toast.error(error.response.data.message)
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
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


