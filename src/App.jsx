import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{padding: '10px',backgroundColor:'#215272'}}>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/movie/:imdbId" Component={MovieDetails}></Route>
          <Route path="*" Component={PageNotFound}></Route>
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
