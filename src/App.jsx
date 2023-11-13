import React, { useState } from 'react';
import './App.css';
import HeaderTop from './components/HeaderTop';
import TodoCreate from './components/TodoCreate';
import CreateBtn from './components/btn/CreateBtn';
import ContentsWorking from './components/ContentsWorking';
import ContentsDone from './components/ContentsDone';

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: false },
    { id: 2, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: true },
  ]);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title,
      text,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
  };

  const clickDeleteButtonHandler = (id) => {
    const deleteTodo = todo.filter((task) => task.id !== id);
    setTodo(deleteTodo);
  };

  const clickDoneButtonHandler = (id) => {
    const updatedTodo = todo.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTodo(updatedTodo);
  };

  return (
    <div className='bgStyle'>
      <div className='main'>
        <HeaderTop />
        <TodoCreate title={title} text={text} titleChangeHandler={titleChangeHandler} textChangeHandler={textChangeHandler}>
          <CreateBtn clickAddButtonHandler={clickAddButtonHandler}>추가하기</CreateBtn>
        </TodoCreate>
        <ContentsWorking todo={todo} clickDeleteButtonHandler={clickDeleteButtonHandler} clickDoneButtonHandler={clickDoneButtonHandler} />
        <ContentsDone todo={todo} clickDeleteButtonHandler={clickDeleteButtonHandler} clickDoneButtonHandler={clickDoneButtonHandler} />
      </div>
    </div>
  );
};

export default App;
