import React from 'react';
import CounterContext from '../contexts/counter';

const Counter = () => (
  // CounterはProviderでラップされているため、Consumerが使用できる。ただし、Consumerの内部は関数として実装する必要あり。
  <CounterContext.Consumer>
    {/* Providerから受け取った中身（count, increment, decrement）を引数として渡す */}
    {({ count, increment, decrement }) => {
      return (
        <React.Fragment>
          <div>count: {count}</div>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
        </React.Fragment>
      );
    }}
  </CounterContext.Consumer>
);

export default Counter;
