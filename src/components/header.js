import React, { Component } from "react";
import Slider from "./header_slider/slider";
import SideNavbar from "./side_navbar/side_navbar";
import Movies from "./movies/movies";

import MovieDetail from './movies/movie_detail'
export class header extends Component {
  constructor(props){
    super(props);
    this.state={showDetail:false}
  }
  showDetail=(showMovieDetail)=>{
    this.setState({showDetail:showMovieDetail})
  }
  setMovie=(movie)=>{
    this.setState({movie:movie})
  }
  close=(closeDetail)=>{
    this.setState({showDetail:closeDetail})
  }
  render() {
    return (
      <div>
        <div className="header">
          <SideNavbar />
          <Slider />
        </div>
        <Movies detail={this.showDetail} movie={this.setMovie}/>
          {(()=>{
            if (!this.state.showDetail) {
              return null
            }else{
              return(
                <MovieDetail closeDetail={this.close} movie={this.state.movie}/>
              )
            }
          })()}
      </div>
    );
  }
}

export default header ;
