import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
            alt="iron hack logo"
          />
        </div>

        <div className="menu">
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png"
            alt="menu"
          />
        </div>
      </header>
      <section className="App-text">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library and become
          a super Ninja developer
        </p>
        <button>Awesome!</button>
      </section>
      <section className="App-images">
        
        <div>
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
            alt="declarative"
          />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div>
        <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
            alt="components"
          />
          <h2>Components</h2>
          <p>Build encapsulated components that manage theis state</p>
        </div>

        <div>
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
            alt="single-way"
          />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to component's.</p>
        </div>
        
        <div>
          <img
            src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
            alt="JSX"
          />
          <h2>JSX</h2>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
