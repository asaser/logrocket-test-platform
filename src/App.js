import React, { Component } from 'react';
import LogRocket from 'logrocket';
import logo from './logo.svg';
import './App.css';

// const LOG_ROCKET_PROJECT_ID = 'asaser/logrocket-test-project'
const LOG_ROCKET_PROJECT_ID = 'rhrklz/finsekaai';

// https://keithweaver.ca/lessons/capture-frontend-logs-user-insights-with-log-rocket/?s=ytktc1

class App extends Component {
  constructor(props) {
    super(props)

    this.user = {
      user: false,
      recordUI: false,
    }
  }

  componentWillMount() {
    // LogRocket.init('asaser/logrocket-test-project');
    const user = {
      email: 'fakeemail@gmail.com',
      recordFrontendLogging: true,
      recordFrontendNetworkCalls: true,
      recordFrontendUI: true,
      associateFrontendLogsWithUser: true,
    }

    
    if (!user || !user.recordFrontendUI) {
      // Record nothing
      this.setState({
        recordUI: false,
      })
    } else {
      this.setState({
        recordUI: true,
      })
    }

    if (user && user.recordFrontendNetworkCalls) {
      LogRocket.init(LOG_ROCKET_PROJECT_ID, {
        network: {
          isEnabled: true,
        }
      })
    } else {
      LogRocket.init(LOG_ROCKET_PROJECT_ID, {
        network: {
          isEnabled: false,
        }
      })
    }

    if (user && user.associateFrontendLogsWithUser) {
      LogRocket.identify(user.email, {
        // Any additional fields
      })
    }
  }


  render() {

    const {
      user,
      recordUI,
    } = this.state

    const content = (  
    
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> Nala Nal Nala nala
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>)

    if (!recordUI) {
      return (
        <div data-private>
          {content}
        </div>
      )
    }
    return (
      <div>
        {content}
      </div>
    )

  }
}

export default App;
