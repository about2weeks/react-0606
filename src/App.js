import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>
        <a href="/">WWW</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, WEB!"></Article>
      <img src="a.png"></img>
      <a href="http://info.cern.ch">web</a>
    </div>
  );
}

export default App;
