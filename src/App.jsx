// React Hooks

// Components
import SmoothScroll from "./assets/components/SmoothScroll/SmoothScroll.jsx";
import Paragraph from "./assets/components/TextGradient/Paragraph.jsx";
import Word from "./assets/components/TextGradient/Word.jsx";
import Character from "./assets/components/TextGradient/Character.jsx";

// Styles
import "./assets/styles/main.scss";

function App() {
  const paragraph = `Life's true richness isn't found in what we accumulate, but in the depth of our connections and the resilience with which we embrace change.`;
  return (
    <>
      <SmoothScroll />
      <div className="title-container" style={{ height: "100vh" }}>
        <h1>Scroll for Text Gradient</h1>
      </div>
      {/* <Paragraph value={paragraph} /> */}
      {/* <Word value={paragraph} /> */}
      <Character value={paragraph} />
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default App;
