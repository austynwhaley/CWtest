import React from "react";

export default class PlaySound extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        play: false
      };
  
      this.url = `${process.env.PUBLIC_URL + '/sounds/catTheme.mp3'}`;
      this.audio = new Audio(this.url);
      this.audio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      }, false);
      this.togglePlay = this.togglePlay.bind(this);
    }
  
    togglePlay() {
      const wasPlaying = this.state.play;
      this.setState({
        play: !wasPlaying
      });
  
      if (wasPlaying) {
        this.audio.pause();
      } else {
        this.audio.play()
      }
    }
  
    render() {
      return (
        <div>
          <button
            id="audioBtn"
            style={{borderRadius: "15px"}}
            onClick={this.togglePlay}> {this.state.play ? "Pause" : "Play Theme Song"}
          </button>
        </div>
      );
    }
  }
  
 