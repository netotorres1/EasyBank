import LastArticles from "./components/LastetArticles/LastArticles";
import Navbar from "./components/Navbar/Navbar";
import RequestInvite from "./components/RequestInvite/RequestInvite";
import WhyChooseEasyBank from "./components/WhyChooseEasyBank/WhyChooseEasyBank";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RequestInvite />
      <WhyChooseEasyBank />
      <LastArticles />
    </div>
  );
}

export default App;
