import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';
import App from './modules/App/App';
import NotFound from './components/404';
import registerServiceWorker from './registerServiceWorker';

class Helium extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 500);
  }
  render() {
    const { loading } = this.state;
    if(loading) {
      return null;
    }
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={App} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<Helium/>, document.getElementById('root'));
registerServiceWorker();
