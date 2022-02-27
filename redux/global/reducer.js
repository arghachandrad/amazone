import { createReducer } from "@reduxjs/toolkit"
import { darkModeOn, darkModeOff } from "./actions"

const initialState = {
  darkMode: false,
}

export const globalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(darkModeOn, (state, action) => {
      state.darkMode = true
    })
    .addCase(darkModeOff, (state, action) => {
      state.darkMode = false
    })
})
