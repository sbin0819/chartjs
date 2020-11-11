import { Route, Switch } from 'react-router-dom';
import Header from './Layout/Header';
import HomePage from './pages/HomePage';
import ChartPage from './pages/ChartPage';
import ChartIdPage from './pages/ChartIdPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Switch>
        <Route exact path='/chart' component={ChartPage} />
        <Route exact path='/chart/:id?' component={ChartIdPage} />
      </Switch>
    </div>
  );
}

export default App;
