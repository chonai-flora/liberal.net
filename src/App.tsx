import './App.css';
import { Helmet } from "react-helmet";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Home from "./components/Home";
import About from "./components/About";
import Venue from "./components/Venue";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Helmet>
        <title>ご飯だよ！全員集合！</title>
        <meta name="description" content="リベラルアーツ" />
      </Helmet>
      <header>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              ご飯だよ！全員集合！
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <div className='component'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;