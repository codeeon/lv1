import Contents from './Contents';

function Wrapper() {
  return (
    <>
      <div>
        <div className='title'>Working..</div>
        <div>
          <Contents />
        </div>
      </div>
      <div>
        <div className='title'>Done..!</div>
        <div>
          <Contents />
        </div>
      </div>
    </>
  );
}

export default Wrapper;
