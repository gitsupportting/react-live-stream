import React, { Component } from "react";

export default class video_player extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <video
          id="video"
          width={313}
          height={197}
          style={{backgroundColor: "red", marginLeft: "90px", marginTop: "70px"}}
          ref="player"
          muted={true}
          autoPlay={true}
          loop
          crossOrigin="anonymous"
          src={this.props.playerSource}
        >
        </video>
      </div>
    );
  }
}