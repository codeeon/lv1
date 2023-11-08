function Header() {
  return (
    <>
      <div className='headerStyle headerLeft headerRight'>
        <div style={{ marginLeft: '10px' }}>My Todo List</div>
        <div style={{ marginRight: '10px' }}>React</div>
      </div>
      <div className='headerStyle headerCreate'>
        <div className='headerInput'>
          <div className='headerLeft headerTitle'>제목</div>
          <div>
            <input className='headerLeft' type='text' />
          </div>
          <div className='headerLeft headerText'>내용</div>
          <div>
            <input className='headerLeft' type='text' />
          </div>
        </div>
        <div>
          <button className='headerRight createBtn'>추가하기</button>
        </div>
      </div>
    </>
  );
}

export default Header;
