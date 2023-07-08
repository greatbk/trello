import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'

const initializeStore = () => {
  return configureStore({reducer: rootReducer, middleware: []})
}

export function useStore() {
  return useMemo(() => initializeStore(), [])
}
