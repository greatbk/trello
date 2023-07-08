import type * as T from './types'
import {UUID} from '../commonTypes'

export const setListidOrders = (payload: T.State): T.SetListidOrders => ({
  type: '@listidOrders/set',
  payload
})

export const addListidToOrders = (payload: UUID): T.AddListidToOrders => ({
  type: '@listidOrders/add',
  payload
})

export const removeListidFromOrders = (payload: UUID): T.RemoveListidFromOrders => ({
  type: '@listidOrders/remove',
  payload
})
