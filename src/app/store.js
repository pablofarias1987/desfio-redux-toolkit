import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from '../features/counter/pruebaSlider'

export const store = configureStore({

  reducer: {
    tasks: taskSlice.reducer
  },
  })