import {List} from '../../store/commonTypes'
import {FC, useMemo} from 'react'
import {Icon} from '../../theme/daisyui'
import {useCards} from '../../store/useCards'
import ListCard from '../ListCard'
import {Div} from '../../components'
import type {MoveFunc} from '../../components'
import {ListDraggable} from '../../components'

export type BoardListProps = {
  list: List
  onRemoveList: () => void
  index: number
  onMoveList: MoveFunc
}

const BoardList: FC<BoardListProps> = ({
  list,
  onRemoveList,
  index,
  onMoveList: MoveFunc,
  ...props
}) => {
  const {cards, onPrependCard, onAppendCard, onRemoveCard} = useCards(list.uuid)

  const children = useMemo(
    () =>
      cards.map((card, index) => (
        <ListCard key={card.uuid} card={card} onRemove={onRemoveCard(card.uuid)} />
      )),
    [cards, onRemoveCard]
  )

  return (
    <ListDraggable id={list.uuid} index={index} onMove={onMoveList}>
      <Div
        {...props}
        className="p-2 m-2 border border-gray-300 rounded-lg"
        minWidth="13rem">
        <div className="flex justify-between mb-2">
          <p className="w-32 text-sm font-bold underline line-clamp-1">{list.title}</p>
        </div>
        <div className="flex justify-between ml-2">
          <Icon name="remove" className="btn-error btn-xs" onClick={onRemoveList} />
          <div className="flex">
            <Icon
              name="post_add"
              className="btn-success btn-xs"
              onClick={onPrependCard}
            />
            <Icon
              name="playlist_add"
              className="ml-2 btn-success btn-xs"
              onClick={onAppendCard}
            />
          </div>
        </div>
        <div className="flex flex-col p-2">{children}</div>
      </Div>
    </ListDraggable>
  )
}

export default BoardList
