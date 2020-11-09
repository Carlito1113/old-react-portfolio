import React from 'react';
import './App.css';

class App extends React.Component {

  // 
  constructor(props) {
    super(props);
    this.state = {
      title: 'Carlito Algarin',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],

      
    }
  }

    // displays content to the page
  render() {
    return (
      <div>Hello from React</div>
    );
  }
}


export default App;
