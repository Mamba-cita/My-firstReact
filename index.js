function App() {
  return (
    <div className="App">
      <Headers />
      <ReactFacts />
      <ImageDisplay />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("MainPage"));

function Headers() {
  return (
    <div>
      <header>
        <nav className="nav">
          <img src="./logo.png" className="logo" />
          <h1>ReactFacts</h1>
          <h5> React Course - Project 1</h5>
        </nav>
      </header>
    </div>
  );
}

function ReactFacts() {
  return (
    <div className="paragraph">
      <h1>React Facts</h1>
      <div>
        <p>React is a JavaScript library for building user interfaces.</p>
        <p>
          It is maintained by Facebook and a community of individual developers
          and companies.
        </p>
        <p>
          React can be used as a base in the development of single-page or
          mobile applications.
        </p>
        <p>
          However, React components are most typically used in the context of
          React-powered user interfaces in web applications, such as web apps,
          mobile apps, or React Native apps.
        </p>
      </div>
    </div>
  );
}


function ImageDisplay() {
  return (
    <div className="image_logo">
    <h1>React</h1>
      <img src="./logo.png" className="image" />
      <h1>Facts</h1>
    </div>
  );




}

function Footer() {
  return (
  <div className="footer">
  <small>@copyright 2022 Edwin's Inc.</small>
  </div>
  );
}
