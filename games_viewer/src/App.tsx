import Genre from "./components/Genre/Genre";
import Navigation from "./components/Navigation/Navigation";
import Carousel from "./components/Carousel/Carousel";
import { fetchSteamAPI, type SteamSpyGame } from "./api/steam";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [games, setGames] = useState<SteamSpyGame[]>([]);
  
  useEffect(() => {
    fetchSteamAPI().then((data) => {
      if (data) setGames(data);
    });
  }, []);

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
              <ul>
                {games.map((game) => (
                  <li key={game.appid}>{game.name}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
