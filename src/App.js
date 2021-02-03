import React, {useEffect, useState} from 'react';
import './App.css';
import Contact from "./component/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Resume from "./component/Resume";
import Portfolio from "./component/Portfolio";
import Testimonials from "./component/Testimonials";

import "./App.css";
import About from "./component/About";
function App() {
    const [resumeData, setResumeData] = useState({});

    useEffect(() => {
        fetch("/resumeData.json")
            .then((res) => res.json())
            .then((data) => {
                setResumeData(data);
            });
    }, []);
  return (
      <div className="App">
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Testimonials data={resumeData.testimonials} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
      </div>
  );
}

export default App;
