import React, { useState } from 'react';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('filterAll');

  // create
  const addItem = () => {
    const newItemObject = {
      id: Date.now(),
      text: newItem,
      isEditing: false,
    };

    setTodoList([...todoList, newItemObject]);
    setNewItem('');
  };

  // delete
  const deleteItem = (id) =>{
    setTodoList(todoList.filter(item => item.id !== id));
  }

  // update
  const startEditing = (id) => {
    setTodoList(todoList.map(item =>
      item.id === id ? { ...item, isEditing: true } : item
    ));
  };
  
  const saveEdit = (id, newText) => {
    setTodoList(todoList.map(item =>
      item.id === id ? { ...item, text: newText, isEditing: false } : item
    ));
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <div className='Wrap'>
        <div className='header'>
            <h1>CheckList</h1>
            <div className='checkWrap'>
            <div
                className={`filterAll ${selectedFilter === 'filterAll' ? 'filterSelected' : ''}`}
                onClick={() => handleFilterClick('filterAll')}>
                전체
            </div>
            <div
                className={`filterIng ${selectedFilter === 'filterIng' ? 'filterSelected' : ''}`}
                onClick={() => handleFilterClick('filterIng')}>
                진행
            </div>
            <div
                className={`filterEnd ${selectedFilter === 'filterEnd' ? 'filterSelected' : ''}`}
                onClick={() => handleFilterClick('filterEnd')}>
                완료
            </div>
          </div>
        </div>
        <div className='listwrap'>
        {todoList.map((item) => (
            <div key={item.id} className='list'>
            {item.isEditing ? (
                <input 
                type="text"
                defaultValue={item.text}
                // onBlur={(e) => saveEdit(item.id, e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                    saveEdit(item.id, e.target.value);
                    }
                }}
                autoFocus
                />
            ) : (
            <div onDoubleClick={() => <div className='listwrap'>
            {todoList.map((item) => (
                <div key={item.id} className='list'>
                {item.isEditing ? (
                    <input 
                    type="text"
                    defaultValue={item.text}
                    onBlur={(e) => saveEdit(item.id, e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                        saveEdit(item.id, e.target.value);
                        }
                    }}
                    autoFocus
                    />
                ) : (
                <div onDoubleClick={() => startEditing(item.id)}>{item.text}</div>
                )}
                <button onClick={() => deleteItem(item.id)}>x</button>
                </div>
            ))}
            </div>
            > startEditing(item.id)}>{item.text}</div>
            )}
            <button onClick={() => deleteItem(item.id)}>x</button>
            </div>
        ))}
        </div>
        <div className='inputwrap'>
          <input 
            type='text' 
            className='inputItem' 
            placeholder='입력해주세요'
            value={newItem}
            onChange={handleInputChange}
          />
          <button className='inputBtn' onClick={addItem}>Enter</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
