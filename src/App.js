import "./App.css";
import StoreListing from "./StoreListing";
import TopBar from "./TopBar";
import Banner from "./Banner";

function App() {
  return (
    <div>
      <nav>
        <TopBar />
      </nav>
      <main>
        <div>
        <Banner />
        </div>
        <StoreListing />
      </main>
    </div>
  );
}

export default App;
