import React from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './contexts/counter'; // 追加
import Counter from './components/counter'; //追加

// Appコンポーネントの実装
class App extends React.Component {
  // 初期化設定
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      // contextが提供しているproviderを用いて、ラップしたコンポーネント（今回の場合はCounter）にcontext（今回の場合はvalue）を渡す
      <CounterContext.Provider value={this.state}>
        <Counter />
      </CounterContext.Provider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
