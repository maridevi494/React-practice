import {configureStore} from "@reduxjs/toolkit";
import slice from './slice'

export const Redux =configureStore({
    reducer: {
        sample:slice,
    }
})