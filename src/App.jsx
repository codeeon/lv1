// import

function App() {
  const bgStyle = {
    display: 'flex',
    justifyContent: 'center',
  };
  const mainStyle = {
    maxWidth: '1200px',
    minWidth: '800px',
  };

  return (
    <div style={bgStyle}>
      <div style={mainStyle}>
        <Headers />
        <Wrapper></Wrapper>
      </div>
    </div>
  );
}

function Headers() {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };
  const left = { marginLeft: '20px', marginTop: '15px' };
  const right = { marginRight: '20px', marginTop: '15px' };

  return (
    <>
      <div style={style}>
        <div style={left}>My Todo List</div>
        <div style={right}>React</div>
      </div>
      <div style={style}>
        <div>
          <span style={left}>제목</span>
          <input style={left} type='text' />
          <span style={left}>내용</span>
          <input style={left} type='text' />
        </div>
        <div>
          <button style={right}>추가하기</button>
        </div>
      </div>
    </>
  );
}

function Wrapper() {
  const title = {
    fontWeight: 'bold',
    fontSize: '40px',
  };

  return (
    <>
      <div>
        <div style={title}>Working..</div>
        <div>
          <Contents />
        </div>
      </div>
      <div>
        <div style={title}>Done..!</div>
        <div>
          <Contents />
        </div>
      </div>
    </>
  );
}

function Contents() {
  const contentStyle = {};

  return (
    <>
      <div>
        <div>리액트 공부하기</div>
        <div>리액트 기초를 공부해봅시다.</div>
        <button>삭제하기</button>
        <button>완료</button>
      </div>
    </>
  );
}

export default App;
