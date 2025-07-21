import React, { useEffect, useState } from 'react'

interface IGenericListProps<T> {
  items: T[],
  selectedItems: T[],
  onSelect: (item: T) => void,
  onDelete: (item: T) => void,
  renderItem: (item: T) => React.ReactNode,
  getKey: (item: T) => string,
  filterItems: (items: T[], input: string) => T[],
  allowNewItems: boolean
}

function GenericList<T>({
  items,
  selectedItems,
  onSelect,
  onDelete,
  renderItem,
  filterItems,
  getKey,
  allowNewItems
}: IGenericListProps<T>) {

  const [value, setValue] = useState('');
  const [currSelectedIndex, setCurrSelectedIndex] = useState<number | null>(null);
  const filteredItems = filterItems(items, value);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCurrSelectedIndex(( (currSelectedIndex ?? -1) + 1) % filteredItems.length);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCurrSelectedIndex(( (currSelectedIndex ?? 0) + filteredItems.length - 1) % filteredItems.length);
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      if(currSelectedIndex === null) {
        if(allowNewItems && value !== '' && !selectedItems.includes(value as T)) {
          onSelect(value as T);
        }
        return;
      }
      const selected = filteredItems[currSelectedIndex];
      if (!selectedItems.includes(selected)) {
        onSelect(filteredItems[currSelectedIndex]);
        setValue('');
      }
    }
  }

  useEffect(() => {
    setCurrSelectedIndex(null);
  }, [value])

  return (
    <div className='container'>
      <div className='tag-selector'>
        <div className='tags'>
          {selectedItems.map(item => (
            <div className='tag' key={getKey(item)}>
              {renderItem(item)}
              <button
                className='icon-x'
                type="button"
                onClick={() => onDelete(item)}
                aria-label={`Usuń ${getKey(item)}`}
              >
                x
              </button>
            </div>
          ))}

        </div>
        <input
          className='tags-input'
          type="text"
          aria-autocomplete='list'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown} />
      </div>
      <ul>
        {filteredItems.map((item, idx) => <li className={currSelectedIndex === idx ? 'active' : ''} key={getKey(item)}>{renderItem(item)}</li>)}
      </ul>
    </div>
  )
}

export default GenericList