import { useState } from 'react';
import './App.css'
import GenericList from './GenericList';

function App() {

  const [items, setItems] = useState(["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "C#", "Ruby", "PHP", "Swift", "Kotlin", "Go", "Rust", "Dart", "Scala", "Perl", "Lua", "R", "MATLAB", "Julia", "Visual Basic", "Assembly", "Clojure", "Elixir", "Haskell", "F#", "Objective-C", "Shell", "PowerShell", "SQL", "PL/SQL", "Groovy", "Erlang", "Fortran", "COBOL", "VHDL", "Verilog", "Ada", "Pascal", "Scheme", "Prolog", "Smalltalk", "OCaml", "Crystal", "Nim", "Hack", "Zig", "Elm", "ReasonML", "Tcl", "Racket"]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function filterItems(items: string[], input: string) {
    return items.filter(item => item.toLowerCase().startsWith(input.toLowerCase()))
                .filter(item => !selectedItems.includes(item));
  }

  function handleDelete(item: string) {
    setSelectedItems(prev => prev.filter(i => i !== item));
  }

  function handleSubmit(item: string) {
    if(!items.includes(item)) {
      setItems(prev => [...prev, item]);
    }

    if(!selectedItems.includes(item)) {
      setSelectedItems(prev => [...prev, item]);
    }
  }

  return (
    <main>
      <GenericList
        items={items}
        selectedItems={selectedItems}
        onSelect={handleSubmit} 
        onDelete={handleDelete} 
        renderItem={(item) => item} 
        filterItems={filterItems}
        getKey={(item) => item.toString()}
        allowNewItems={true} />
    </main>
  )
}

export default App
