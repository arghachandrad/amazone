import { createSelector } from "@reduxjs/toolkit"

export const selectGlobal = (state) => state.global

export const globalSelector = createSelector(selectGlobal, (state) => state)
