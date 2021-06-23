import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBest from './SelectedBest';


class App extends Component {
  constructor(){
    super()
    this.state={
      hideList:false
    }
  }

  handleSelect = () => {
      this.setState({
        hideList:true

    })
  }
  render() {
    return (
      <div>
        <Header />
        <Main hideList={this.state.hideList}/>
        <SelectedBest handleSelect={this.handleSelect} />
        <Footer />
      </div>
    )
  }
}

export default App
