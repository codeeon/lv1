

// const ContentsWorking = () => {
//   return (
//     <>
//       <div>
//         <div className='title'>Working..🔥</div>
//         <div className='todos'>
//           {todo
//             .filter((task) => {
//               return task.isDone === false;
//             })
//             .map((task) => {
//               return (
//                 <div key={task.id} className='content'>
//                   <div className='contentTitle'>{task.title}</div>
//                   <div>{task.text}</div>
//                   <div className='contentBtns'>
//                     <button
//                       className='btn red'
//                       onClick={() => {
//                         clickDeleteButtonHandler(task.id);
//                       }}
//                     >
//                       삭제하기
//                     </button>
//                     <DoneBtn clickDoneButtonHandler={clickDoneButtonHandler} task={task} />
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContentsWorking;
