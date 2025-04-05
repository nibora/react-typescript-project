import Greeting from "./components/Greeting.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Content from "./components/Content.tsx";

function App() {
  return (
    <>
        <div>
            <h1>Unsere Aufgabe 1</h1>
            <Greeting name="Boris"/>
        </div>
        <div>
            <Header />
            <Content><p>Das hier ist ein Children der Content-Komponente</p></Content>
            <Footer/>
        </div>
    </>
  )
}

export default App
