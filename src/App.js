import { Route, Switch } from 'react-router-dom';
import Header from './Layout/Header';
import HomePage from './pages/HomePage';
import ChartPage from './pages/ChartPage';
import ChartIdPage from './pages/ChartIdPage';

import styled from 'styled-components';

const GlobalLayout = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  /* background: #26283c; */
`;

function App() {
  return (
    <GlobalLayout>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Switch>
        <Route exact path='/chart' component={ChartPage} />
        <Route exact path='/chart/:id?' component={ChartIdPage} />
      </Switch>
    </GlobalLayout>
  );
}

export default App;
