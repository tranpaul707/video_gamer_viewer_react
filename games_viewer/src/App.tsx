import Genre from "./components/Genre/Genre";
import Navigation from "./components/Navigation/Navigation";
import Carousel from "./components/Carousel/Carousel";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <header>
          <nav>
            <Navigation />
          </nav>
        </header>
        <div className="page-body">
          <aside>
            <Genre />
          </aside>

          <div className="content">
            <section>
              <Carousel />
            </section>

            <section>
              <Carousel />
            </section>

            <section>
              <Carousel />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
