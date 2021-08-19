import { Switch, Route } from "react-router"

import Home from "./pages/Home"

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App

