import React from 'react';
import ContactList from '../components/ContactList';
import '../styles/Home.css';
import spockHeadShot from '../assets/afro-spock.png';

const Home = () => {
  return (
    <div>
      <div className="container align-container mb-4">
        <h1 id="name" className="my-4">
          Welcome to Mr. Spock's Portfolio Page
        </h1>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img
              className="spock-headshot img-fluid mx-auto d-block"
              src={spockHeadShot}
              alt="Afro Spock"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="bio-text mt-5 p-5">
              <p>
                Captain S'chn T'gai Spock (retired) is one of the most
                distinguished and respected figures in the United Federation of
                Planets. As a Starfleet officer in the 23rd century, Spock
                served aboard the starship USS Enterprise as science officer
                under Captain Christopher Pike, as first officer and science
                officer under Captain James T. Kirk, and as the commanding
                officer of the Enterprise during its tenure as a training ship.
                In the 24th century, Spock became an adviser to the leadership
                of the Federation and a celebrated ambassador on their behalf.
                He disappeared in 2387 after saving the Federation from a
                supernova that destroyed Romulus and caused the creation of the
                alternate reality.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactList />
    </div>
  );
};

export default Home;
