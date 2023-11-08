import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className='bgStyle'>
      <div className='main'>
        <Header />
        <Wrapper></Wrapper>
      </div>
    </div>
  );
}

export default App;
