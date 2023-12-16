import { auth } from '@/firebase/firebase';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
    loading : true,
    error : null
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
                
            }
            thunkAPI.dispatch(userSuccess(currentUser));
        }).catch((err) => {
        }).catch((err) => {
            thunkAPI.dispatch(userFailure(err.message));
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
    userFailure: (state , action: PayloadAction<string>) => {
      state.data = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { userStart , userSuccess , userFailure } = userSlice.actions;
export default userSlice.reducer;
