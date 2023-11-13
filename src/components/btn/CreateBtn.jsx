const CreateBtn = ({ clickAddButtonHandler, children }) => {
  return (
    <button className='createBtn headerRight' onClick={clickAddButtonHandler}>
      {children}
    </button>
  );
};

export default CreateBtn;
