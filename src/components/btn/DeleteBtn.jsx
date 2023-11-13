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

export default DeleteBtn;
