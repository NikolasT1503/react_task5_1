import React from 'react';

export default class MainContainer extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            a: "Привет"
          };
        console.log('Constructor');
    }
    
      static getDerivedStateFromProps(props, state) {
        console.log("гетДериведСтэйт и Пропс", props, state);
      }
    
      componentWillMount() {
        console.log("Виллмаунт");
      }
      componentDidMount() {
        console.log("Дидмаунт");
      }

      componentWillUnmount(){
          console.log("ВилАнмаунт")
      }

      shouldComponentUpdate(nextProps, nextState){
          console.log('shouldComponentUpdate', this.props, nextProps, this.state, nextState)
          return true;
      }
    
      render() {
        return (
          <div>
            {this.props.showMe && (
              <div>
                <h1>Привет мир</h1>
                <p>Миру мир Пиру пир</p>
                <p>{this.props.counter}</p>
              </div>

            )}
          </div>
        );
      }

      getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate')
      }

      componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState, snapshot)
      }
}

MainContainer.defaultProps = {
    b: "Пока",
  };