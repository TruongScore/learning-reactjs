import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';

function App() {
  const name = 'Truong';
  const age = '23';
  const isVip = true
  const student = {
    name: 'Easy FrontEnd'
  };
  const colorList = ['red', 'green', 'blue']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Truong Score
        </p>
        <p>Xin chao {name} - {age} - {isVip ? 'Vip' : 'Pro'}</p>
        <p>{student.name}</p>
        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
      <div className='todo'>
        <TodoFeature />
      </div>
      <div className='album'>
        <AlbumFeature />
      </div>
      <div className='color-box'>
        <ColorBox />
      </div>
      <div className='counter'>
        <Counter />
      </div>
    </div>
  );
}

export default App;
