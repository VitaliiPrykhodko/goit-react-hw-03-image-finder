import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import axios from "axios";
import { URL } from "./URL";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

class App extends Component {
  state = {
    pictures: [],
    page: 1
  };

  handleInput = (name) => {
    axios
    .get(
      `${URL}q=${name}&page=${this.state.page}&key=23495092-fcdd3993ee353ca97f61af1fc&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((elem) =>
        this.setState(prevState => ({
        page: prevState.page += 1,
        pictures:  [...prevState.pictures, ...elem.data.hits ]
      }))
    )
    // this.morePictures()
  }

  // morePictures = () => {
  //   this.setState(prevState =>({
  //     page: prevState.page += 1,
  //   }))
  // }

  render() {
    const { pictures } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleInput} />
        {pictures.length> 0 && <ImageGallery pictures={pictures} />}
        {pictures.length > 0 && <Button onClick={this.handleInput}/>}
      </div>
    );
  }
}

export default App;
