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

export default TodoCreate;
