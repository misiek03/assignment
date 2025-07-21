import React, { useState } from 'react'

interface IGenericListProps<T> {
  items: T[],
  selectedItems: T[],
  currSelected: T,
  onSelect: (item: T) => void,
  onDelete: (item: T) => void,
  renderItem: (item: T) => React.ReactNode,
  getKey: (item: T) => string,
  filterItems: (items: T[], input: string) => T[]
}

function GenericList<T>({
  items, 
  selectedItems, 
  currSelected, 
  onSelect, 
  onDelete, 
  renderItem, 
  filterItems, 
  getKey
}: IGenericListProps<T>) {

  const [value, setValue] = useState('');
  const filteredItems = filterItems(items, value);

  return (
    <div className='container'>
      <div className='tag-selector'>
        <div className='tags'>
          Tag1 Tag2 
        </div>
        <input type="text" aria-autocomplete='list' value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
        <ul className='list'>
          {filteredItems.map(item => <li key={getKey(item)}>{renderItem(item)}</li>)}
        </ul>
    </div>
  )
}

export default GenericList