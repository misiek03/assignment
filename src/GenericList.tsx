import React, { useEffect, useRef, useState } from 'react'

interface IGenericListProps<T> {
  items: T[],
  selectedItems: T[],
  onSelect: (item: T) => void,
  onDelete: (item: T) => void,
  renderItem: (item: T) => React.ReactNode,
  getKey: (item: T) => string,
  filterItems: (items: T[], input: string) => T[],
  allowNewItems: boolean,
  inputLabel: string,
  listLabel: string,
}

function GenericList<T>({
  items,
  selectedItems,
  onSelect,
  onDelete,
  renderItem,
  filterItems,
  getKey,
  allowNewItems,
  inputLabel,
  listLabel,
}: IGenericListProps<T>) {

  const [value, setValue] = useState('');
  const [currSelectedIndex, setCurrSelectedIndex] = useState<number | null>(null);
  const filteredItems = filterItems(items, value);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Escape') {
      e.preventDefault();
      setCurrSelectedIndex(null);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCurrSelectedIndex(((currSelectedIndex ?? -1) + 1) % filteredItems.length);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCurrSelectedIndex(((currSelectedIndex ?? -1) + filteredItems.length - 1) % filteredItems.length);
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currSelectedIndex === null) {
        if (allowNewItems && value !== '' && !selectedItems.includes(value as T)) {
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
  }, [value]);

  useEffect(() => {
    if (currSelectedIndex !== null && itemRefs.current[currSelectedIndex]) {
      console.log(itemRefs.current);
      itemRefs.current[currSelectedIndex]?.scrollIntoView({
        behavior: 'auto',
        block: 'nearest'
      })
    }
  }, [currSelectedIndex]);

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
                aria-label={`Remove ${getKey(item)}`}
              >
                x
              </button>
            </div>
          ))}

        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label={inputLabel}
          aria-autocomplete='list'
          aria-controls='available-list'
          aria-activedescendant={
            currSelectedIndex !== null 
              ? `available-list-item-${currSelectedIndex}`
              : undefined
          }
        />
      </div>
      <ul id="available-list" aria-label={listLabel}>
        {filteredItems.map((item, idx) => (
          /* eslint-disable-next-line */
          <li
            key={getKey(item)}
            className={currSelectedIndex === idx ? 'active' : ''}
            onClick={() => onSelect(item)}
            ref={el => { itemRefs.current[idx] = el }}
          >
            {renderItem(item)}
          </li>))}
      </ul>
    </div>
  )
}

export default GenericList