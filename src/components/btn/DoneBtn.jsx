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

export default DoneBtn;
