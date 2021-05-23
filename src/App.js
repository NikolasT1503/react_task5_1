import "./App.css";
import React from "react";
import MainContainer from "./mainContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContainer: false,
      counter: 0,
    };
    //this.handlerShow = this.handlerShow.bind(this);
  }

  /*   handlerShow() {
    const st = this.state.showContainer;
    return (this.setState = {
      showContainer: !st,
    });
  } */

  render() {
    return (
      <div className="App">
        <button
          onClick={() =>
            this.setState((state) => ({ showContainer: !state.showContainer }))
          }
        >
          Кнопка
        </button>
        <div>
          <button
            onClick={() =>
              this.setState((state) => ({
                counter: state.counter - 1,
              }))
            }
          >
            -
          </button>
          <strong>{this.state.counter}</strong>
          <button
            onClick={() =>
              this.setState((state) => ({
                counter: state.counter + 1,
              }))
            }
          >
            +
          </button>
        </div>
        {this.state.showContainer && (
          <MainContainer showMe counter={this.state.counter} />
        )}
      </div>
    );
  }
}

export default App;
