import type * as T from './types'
import {ListidCardid, ListidCardidS} from '../commonTypes'

export const setListidCardids = (payload: ListidCardidS): T.SetListidCardids => ({
  type: '@listidCardids/set',
  payload
})

export const removeListid = (payload: string): T.RemoveListidAction => ({
  type: '@listidCardids/remove',
  payload
})

export const prependCardidToListid = (
  payload: ListidCardid
): T.PrependCardidToListidAction => ({
  type: '@listidCardids/prependCardid',
  payload
})

export const appendCardidToListid = (
  payload: ListidCardid
): T.AppendCardidToListidAction => ({
  type: '@listidCardids/appendCardid',
  payload
})

export const removeCardidFromListid = (
  payload: ListidCardid
): T.RemoveCardidToListidAction => ({
  type: '@listidCardids/removeCardid',
  payload
})
