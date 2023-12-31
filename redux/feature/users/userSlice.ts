import { BASEURL, LOCAL_USER, removeData, setData } from '@/constants';
import { IerrorFormat, IuserData, UserForm, UserState } from '@/constants/interface';
import { auth } from '@/firebase/firebase';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';


import { userAuthApi } from './userAPI';
// const AgData = getData(LOCAL_USER)
const initialState: IuserData = {
  // data: AgData !== null ? JSON.parse(AgData) : null,
  data: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwNDExMjIyNywiZXhwIjoxNzA0NzE3MDI3fQ.GUEiUFXQ9X6XpUQBleEp7XFBz7pZUN6eOvD-NdwxrLM",
    "username": "Dev Gohari",
    "email": "newnew@gmial.com",
    "pic": "https://i.pinimg.com/236x/4e/2b/88/4e2b88baa1d41926a23b05180456fb56.jpg"
  },
  loading: false,
  error: null,
  productSearch: ""
};

export const signInWithGoogle = createAsyncThunk(
  "user/signInWithGoogle",
  async (arg, thunkAPI) => {

    const provider = new GoogleAuthProvider();
    let currentUser = null
    await signInWithPopup(auth, provider)
      .then((res) => {
        currentUser = {
          name: res.user.displayName,
          email: res.user.email,
          password: res.user.uid,
          profilePic: res.user.photoURL,
          withGoogle: true,
        }
      }).catch((err) => {
      }).catch((err) => {
        thunkAPI.dispatch(userFailure(err.message));
      })

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(`${BASEURL}auth/signup`, currentUser)
      thunkAPI.dispatch(userSuccess(res.data.data))

      toast.success("User login successfully")
    } catch (error) {
      console.log("error google", error)
    }



  }
)

export const signinmanually = createAsyncThunk(
  "user/signinmanually",
  async ({ email, password }: UserForm, { rejectWithValue, dispatch }) => {
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
        token: res.data.token,
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
      state.error = null;
      setData(LOCAL_USER, JSON.stringify({ ...action.payload }))
    },
    userFailure: (state, action: PayloadAction<IerrorFormat>) => {
      state.data = null;
      state.loading = false;
      state.error = action.payload.message;
    },

    clearUser: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
      removeData(LOCAL_USER);
    },
    setSearch: (state, action: PayloadAction<{ value: string }>) => {
      state.productSearch = action.payload.value
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(userAuthApi.endpoints.userAuth.matchFulfilled, (state, { payload }) => {
      state.data = { ...payload }
      setData(LOCAL_USER, JSON.stringify({ ...payload }))
    })
      .addMatcher(userAuthApi.endpoints.userAuth.matchRejected, (state, { payload }) => {
        if (typeof (payload) == 'string') {
          state.error = payload;
          state.data = null
        }
      })

    builder.addMatcher(userAuthApi.endpoints.userSignup.matchFulfilled, (state, { payload }) => {
      if (typeof (payload) === 'object' && payload !== null) {
        state.data = payload || null
      }
      setData(LOCAL_USER, JSON.stringify(payload))
    })
      .addMatcher(userAuthApi.endpoints.userSignup.matchRejected, (state, { payload }) => {
        if (typeof (payload) == 'string') {
          state.error = payload;
          state.data = null
        }
      })

    builder.addMatcher(userAuthApi.endpoints.userAddress.matchFulfilled, (state, { payload }) => {
      // toast.success("payload.")
    })
      .addMatcher(userAuthApi.endpoints.userSignup.matchPending, (state, { payload }) => {
        // SetLoading(true)
      })


  }
});

export const { userStart, userSuccess, userFailure, clearUser, setSearch } = userSlice.actions;
export default userSlice.reducer;


