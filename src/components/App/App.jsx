import React from 'react';
import './App.css';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

  state = {
    headertext : 'Name It..!',
    headerExpanded : true,
    suggestedNames : [],
  };

  handleOnChangeEvent = (inputtext) => {
      this.setState({ 
        headerExpanded : !inputtext ,
        suggestedNames : inputtext ? name(inputtext) : [],
    });
      
  }

    render () {
        console.log(name('cloud')); 
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headertext} />
                <SearchBox onInputChange={this.handleOnChangeEvent} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );

    }
}


export default App;