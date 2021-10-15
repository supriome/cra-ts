// eslint-disable-next-line
import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { GetPosts } from "./apis"
import './App.scss';
function App() {

  useEffect(() => {
      (async () => {
          // await fetch('https://jsonplaceholder.typicode.com/posts')
          //   .then(res => res.json())
          //   .then(data => console.log(data))
          //   .catch(err => console.error(err))

          const data = await GetPosts()

          console.log(`data`, data)

          console.log("after")
        })()

      
      
      return () => {
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


interface RouteMathTypes {
  url?: string
  path?: string
}

function Topics() {
  let { url, path } = useRouteMatch<RouteMathTypes>();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}


interface ParamTypes {
  topicId?: string
}
function Topic() {
  let { topicId } = useParams<ParamTypes>();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
