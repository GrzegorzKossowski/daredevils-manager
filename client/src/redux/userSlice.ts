import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState, saveState } from 'utils';

const localUserStateName = 'userState';

interface UserState {
    userName: string;
    moneyAmount: number;
    userLevel: number;
    sex?: string;
}

const initialState: UserState = loadState(localUserStateName) || {
    userName: 'John Doe',
    moneyAmount: 500,
    userLevel: 0,
    sex: 'male',
};

export const userStateSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, { payload }: PayloadAction<UserState>) => {
            state.userName = payload.userName;
            state.sex = payload.sex;
            state.moneyAmount = Math.floor(Math.random() * (1000 - 500)) + 500;
            saveState(localUserStateName, {
                ...state,
                ...payload,
            });
        },
        incrementMoney: (state, { payload }: PayloadAction<number>) => {
            state.moneyAmount += payload;
        },
        decrementMoney: (state, { payload }: PayloadAction<number>) => {
            state.moneyAmount -= payload;
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
    },
});

export const { setUserName, setUserData, incrementMoney, decrementMoney } =
    userStateSlice.actions;
export default userStateSlice.reducer;
