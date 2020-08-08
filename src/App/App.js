import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Book-Picker</h2>
        <button className="btn btn-info">
        <i className="fas fa-book"></i> BOOKS <i className="fas fa-book"></i></button>
      </div>
    );
  }
}

export default App;
