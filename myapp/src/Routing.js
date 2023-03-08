import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About/about";
import { Content } from "./Content/content";
import {Footer} from "./Footer/footer";
//import {Header} from "./Header/Header"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}>
          {/* <Route index element={<Header />} /> */}
          <Route path="/content" element={<Content />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);