import "./App.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div
        class="bg-no-repeat bg-left-top bg-[length:300px_300px]"
        style={{ backgroundImage: "url(/images/bg-image1.png)" }}
      >
        <Header />
        <div
          class="bg-no-repeat bg-right-bottom bg-[length:300px_300px] h-[70vh] relative"
          style={{ backgroundImage: "url(/images/bg-image2.png)" }}
        >
          <Section />
        </div>
        
          <Footer />
        
      </div>
    </div>
  );
}

export default App;
