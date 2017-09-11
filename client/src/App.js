import React from 'react';
import './App.css';
import AppSign from './containers/AppSignContainer';
import Subjects from './containers/SubjectsContainer';
import Subtopics from './containers/SubtopicsContainer';
import ShowCoupons from './containers/ShowCouponsContainer';
import Demo from './components/Geolocated';

// compoonentWillMount() {
//   loadSubjects();
//   loadSubtopics();
//
// }


function App() {
  return (
    <div className="App">
      <AppSign />
      <div className="container text-center">
        <div className="headingLogo">BOGO</div>
        <div className="headingLogoMini">by zip</div>
      </div>
      <Demo />
      <Subjects />
      <Subtopics />
      <ShowCoupons />
    </div>
  )
}

export default App;
