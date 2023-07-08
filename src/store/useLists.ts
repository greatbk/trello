import {useDispatch, useSelector} from 'react-redux'
import {AppState} from './AppState'
import {List} from './commonTypes'
import {useCallback} from 'react'
import * as LO from './listidOrders'
import * as L from './listEntities'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
    listidOrders.map(uuid => listEntities[uuid])
  )

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(list.uuid))
      dispatch(L.addList(list))
    },
    [dispatch]
  )

  const onRemoveList = useCallback(
    (listid: string) => () => {
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch]
  )

  return {lists, onCreateList, onRemoveList}
}
