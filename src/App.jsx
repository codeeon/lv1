import React, { useState } from 'react';
import './App.css';
// import Contents from './components/Contents';

const App = () => {
  // Todo list
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: false },
    { id: 2, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: true },
  ]);
  // content-title/text
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  // const [isDone, setIsDone] = useState(false);

  // titleChangeHandler
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  // textChangeHandler
  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  // 추가하기 버튼 클릭
  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 todo를 생성한다. -> newTodo
    // 2. newTodo를 배열에 더한다.
    const newTodo = {
      id: todo.length + 1,
      title,
      text,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
  };
  // 삭제하기 버튼 클릭
  const clickDeleteButtonHandler = (id) => {
    const deleteTodo = todo.filter((task) => task.id !== id);
    setTodo(deleteTodo);
  };
  // 완료/취소 버튼
  const clickDoneButtonHandler = (id) => {
    const updatedTodo = todo.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });
    setTodo(updatedTodo);
  };

  // JSX 리턴
  return (
    <>
      <div className='bgStyle'>
        <div className='main'>
          <div className='headerStyle headerPadding'>
            <div className='marginLeft'>My Todo List</div>
            <div className='marginRight'>React</div>
          </div>
          <div className='headerStyle headerCreate'>
            <div className='headerLeft headerInput'>
              제목 &nbsp;
              <input type='text' value={title} onChange={titleChangeHandler} className='createInput headerRight' />
              내용 &nbsp;
              <input type='text' value={text} onChange={textChangeHandler} className='createInput' />
            </div>
            <button className='createBtn headerRight' onClick={clickAddButtonHandler}>
              추가하기
            </button>
          </div>
          <div>
            <div className='title'>Working..🔥</div>
            {todo.map((task) => {
              if (task.isDone === false)
                return (
                  <div key={task.id} className='content'>
                    <div className='contentTitle'>{task.title}</div>
                    <div>{task.text}</div>
                    <div className='contentBtns'>
                      <button
                        className='btn red'
                        onClick={() => {
                          clickDeleteButtonHandler(task.id);
                        }}
                      >
                        삭제하기
                      </button>
                      <button
                        className='btn green'
                        onClick={() => {
                          clickDoneButtonHandler(task.id);
                        }}
                      >
                        완료
                      </button>
                    </div>
                  </div>
                );
              return null;
            })}
          </div>
          <div>
            <div className='title'>Done...!🎉</div>
            {todo.map((task) => {
              if (task.isDone === true)
                return (
                  <div key={task.id} className='content'>
                    <div className='contentTitle'>{task.title}</div>
                    <div>{task.text}</div>
                    <div className='contentBtns'>
                      <button
                        className='btn red'
                        onClick={() => {
                          clickDeleteButtonHandler(task.id);
                        }}
                      >
                        삭제하기
                      </button>
                      <button
                        className='btn green'
                        onClick={() => {
                          clickDoneButtonHandler(task.id);
                        }}
                      >
                        취소
                      </button>
                    </div>
                  </div>
                );
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
