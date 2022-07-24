import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    errors: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll()
            console.log(1)
            return data
        } catch (e){
            return rejectWithValue(e.response.data);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers:(builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null
                state.cars = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
            })
});

const {reducer:carReducer} = carSlice;

const carActions = {
    getAll
};

export {
    carReducer,
    carActions
}