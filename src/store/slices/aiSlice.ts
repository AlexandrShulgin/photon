import API from "../../services/api";
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IAiConnect } from "../interfaces";

interface IInitState {
  aiConnect: IAiConnect | undefined;
  aiAnswer:
    | {
        answer: string;
      }
    | undefined;
  messages: any[]
}

const initialState: IInitState = {
  aiConnect: undefined,
  aiAnswer: undefined,
  messages: []
};

export const ConnectAI = createAsyncThunk("ai/ConnectAI", async () => {
  try {
    const response: any = await API.post(`/connect`, {
      question: "Is the chat ready?",
    });
    if (response.status === 201 || response.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    console.log(error.message);
  }
});

export const SendMessageAI = createAsyncThunk(
  "auth/Register",
  async (question: string) => {
    try {
      const response: any = await API.post(`/ask`, {
        question: question,
      });
      if (response.status === 201 || response.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }
);

const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    addLocalMessage: (state, action: PayloadAction<any>) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<IInitState>) {
    builder.addCase(
      ConnectAI.pending,
      (state: any, action: PayloadAction<any>) => {
        state.status = "pending";
      }
    );
    builder.addCase(
      ConnectAI.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        state.status = "fulfilled";
        state.aiConnect = action.payload;
      }
    );
    builder.addCase(
      ConnectAI.rejected,
      (state: any, action: PayloadAction<any>) => {
        state.status = "rejected";
      }
    );
    builder.addCase(
      SendMessageAI.pending,
      (state: any, action: PayloadAction<any>) => {
        state.status = "pending";
      }
    );
    builder.addCase(
      SendMessageAI.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        state.status = "fulfilled";
        state.messages = [...state.messages, action.payload];
      }
    );
    builder.addCase(
      SendMessageAI.rejected,
      (state: any, action: PayloadAction<any>) => {
        state.status = "rejected";
      }
    );
  },
});

export const {addLocalMessage} = aiSlice.actions

export default aiSlice.reducer;
