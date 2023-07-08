import type * as T from './types'
import {List} from '../commonTypes'

export const addList = (payload: List): T.AddListAction => ({
  type: '@listEntities/add',
  payload
})

export const removeList = (payload: string): T.RemoveListAction => ({
  type: '@listEntities/remove',
  payload
})
