import React from 'react'

interface IGenericListProps<T> {
  items: T[],
  selectedItems: T[],
  currSelected: T,
  onSelect: (item: T) => void,
  onDelete: (item: T) => void,
  renderItem: (item: T) => React.ReactNode,
  getKey: (item: T) => string
}

function GenericList<T>({items, selectedItems, currSelected, onSelect, onDelete, renderItem, getKey}: IGenericListProps<T>) {

  return (
    <div>
        <ul>
          {items.map(item => <li key={getKey(item)}>{renderItem(item)}</li>)}
        </ul>
    </div>
  )
}

export default GenericList