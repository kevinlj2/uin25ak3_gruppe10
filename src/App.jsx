import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import PersonPage from "./components/PersonPage";
import Home from "./components/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medlem/:slug" element={<PersonPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
