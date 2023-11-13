import React, { useState } from 'react';
import './App.css';
// import ContentsWorking from './components/ContentsWorking';

const App = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: false },
    { id: 2, title: '리액트 공부하기', text: '리액트 기초를 공부해봅시다.', isDone: true },
  ]);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  // const [isDone, setIsDone] = useState(false);

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

// const BG = (children) => {
//   return (
//     <div className='bgStyle'>
//       <div className='main'>{children}</div>
//     </div>
//   );
// };

const HeaderTop = () => {
  return (
    <div className='headerStyle headerPadding'>
      <div className='marginLeft'>My Todo List</div>
      <div className='marginRight'>React</div>
    </div>
  );
};

const TodoCreate = ({ title, text, titleChangeHandler, textChangeHandler, children }) => {
  return (
    <div className='headerStyle headerCreate'>
      <div className='headerLeft headerInput'>
        제목 &nbsp;
        <input type='text' value={title} onChange={titleChangeHandler} className='createInput headerRight' />
        내용 &nbsp;
        <input type='text' value={text} onChange={textChangeHandler} className='createInput' />
      </div>
      {children}
    </div>
  );
};

const DoneBtn = ({ clickDoneButtonHandler, task }) => {
  return (
    <button
      className='btn green'
      onClick={() => {
        clickDoneButtonHandler(task.id);
      }}
    >
      완료
    </button>
  );
};

const CreateBtn = ({ clickAddButtonHandler, children }) => {
  return (
    <button className='createBtn headerRight' onClick={clickAddButtonHandler}>
      {children}
    </button>
  );
};

const DeleteBtn = ({ clickDeleteButtonHandler, task }) => {
  return (
    <button
      className='btn red'
      onClick={() => {
        clickDeleteButtonHandler(task.id);
      }}
    >
      삭제하기
    </button>
  );
};

const ContentsWorking = ({ todo, clickDeleteButtonHandler, clickDoneButtonHandler }) => {
  return (
    <div>
      <div className='title'>Working..🔥</div>
      <div className='todos'>
        {todo
          .filter((task) => {
            return task.isDone === false;
          })
          .map((task) => {
            return (
              <div key={task.id} className='content'>
                <div className='contentTitle'>{task.title}</div>
                <div>{task.text}</div>
                <div className='contentBtns'>
                  <DeleteBtn clickDeleteButtonHandler={clickDeleteButtonHandler} task={task} />
                  <DoneBtn clickDoneButtonHandler={clickDoneButtonHandler} task={task} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const ContentsDone = ({ todo, clickDeleteButtonHandler, clickDoneButtonHandler }) => {
  return (
    <div>
      <div className='title'>Done...!🎉</div>
      <div className='todos'>
        {todo
          .filter((task) => {
            return task.isDone === true;
          })
          .map((task) => {
            return (
              <div key={task.id} className='content'>
                <div className='contentTitle'>{task.title}</div>
                <div>{task.text}</div>
                <div className='contentBtns'>
                  <DeleteBtn clickDeleteButtonHandler={clickDeleteButtonHandler} task={task} />
                  <DoneBtn clickDoneButtonHandler={clickDoneButtonHandler} task={task} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
