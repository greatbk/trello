import type * as T from './types'
import {Card, UUID} from '../commonTypes'

export const addCard = (payload: Card): T.AddCardAction => ({
  type: '@cardEntities/add',
  payload
})

export const removeCard = (payload: UUID): T.RemoveCardAction => ({
  type: '@cardEntities/remove',
  payload
})
