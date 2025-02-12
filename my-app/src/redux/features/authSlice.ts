import AuthService from "@/service/AuthService";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

// Define the shape of the login response (adjust according to your API response)
interface LoginResponse {
  user: any; // Replace `any` with the actual type of your user object
  token: string;
}

// Define the shape of the initial state
interface AuthState {
  user: any | null; // Replace `any` with the actual type of your user object
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Async thunk for login
export const doLogin = createAsyncThunk(    
  'auth/login',
  async (params: any, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(params);
      return response; // Ensure the response matches the `LoginResponse` interface
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // The server responded with a status code outside the 2xx range
        return rejectWithValue(axiosError.response.data);
      } else if (axiosError.request) {
        // The request was made but no response was received
        return rejectWithValue({ message: "No response received from the server" });
      } else {
        // Something happened in setting up the request
        return rejectWithValue({ message: axiosError.message });
      }
    }
  }
);

export const doLogout = createAsyncThunk(
'auth/logout',
async (_, { rejectWithValue }) => {
  try {
    await AuthService.cerrarSesion();
    return;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      return rejectWithValue(axiosError.response.data);
    } else if (axiosError.request) {
      return rejectWithValue({ message: "No se recibió respuesta del servidor" });
    } else {
      return rejectWithValue({ message: axiosError.message });
    }
  }
}
)

// Auth slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doLogout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(doLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Error al cerrar sesión';
      })
      .addCase(doLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(doLogin.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || 'Error en el inicio de sesión';
      });
  }
});

// Export actions
export const { logout, clearError } = authSlice.actions;

// Export reducer
export default authSlice.reducer;