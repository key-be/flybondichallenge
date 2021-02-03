import { Switch, Route, Redirect } from 'react-router-dom';
import Results from '../pages/results';

export function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Results}></Route>
      <Redirect to="/" />
    </Switch>
  );
}