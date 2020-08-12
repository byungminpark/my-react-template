/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Image from './circle.jpg';

const App = () => {
  // ES6+ 테스트
  (function test() {
    /* eslint-disable prefer-object-spread */
    console.log(
      new Promise(() => 'I am a Promise.'),
      Object.assign({}, { name: 'Park' })
    );
  })();

  const [count, setCount] = useState(0);

  return (
    <>
      <section className="App">
        'I am a section.'
        <button type="button" onClick={() => setCount(count + 1)}>
          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
          {count}입니다.
        </button>
        <img src={Image} alt="" />
      </section>
    </>
  );
};

export default App;
