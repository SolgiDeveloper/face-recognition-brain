import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import './App.css';


const app = new Clarifai.App({
  apiKey: 'c7b11da0724642cc94b11933d788c063'
 });
const particlesOptions = {
  particles: {
    number:{
      value:200,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmit=() =>{
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
      function(response) {
        // do something with response
        console.log(response.outputs[0].dara.regions[0].region_info.bounding_box);
      },
      function(err) {
        // there was an error
      }
  );
  }
    render() {
      return (
        <div className="App">
        <Particles className='particles'
          params = {particlesOptions}
        />
          <Navigation/>
          <Logo/>
          <Rank/>
          <ImageLinkForm
           onInputChange= {this.onInputChange}
           onButtonSubmit= {this.onButtonSubmit}
          />
          <FaceRecognition imageurl={this.state.imageUrl}/>
        </div>
      );
    }
  }

export default App;
