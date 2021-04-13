import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Monitor from "../components/Monitor";

class Home extends Component {
    render() {
        return (
          <div>
            <Header />
              <div className="container p-2"><Monitor /></div>
            <Footer />
          </div>
        );
      }
}

export default Home;