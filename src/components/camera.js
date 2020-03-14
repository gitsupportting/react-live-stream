import React, { useState, useEffect } from 'react';
import RecordRTC from 'recordrtc';
import VideoPlayer from "./video_conference";
import { sendVideo } from "./socket";

var recorder;
var blobs = [];
var rxCount = 0;
// var binaryData = [];


var mediaSource;
var sourceBuffer;
var blobBuffers = [];
var player;
var that;
function handleStream(screenStream) {
  navigator.mediaDevices.getUserMedia({ audio: true }).then(function (microphone) {
    var finalStreamToBeRecorded = new MediaStream();

    // important: we must convert multiple audio tracks into single audio track
    var mixedAudioStream = getMixedAudioStreamXYZ([microphone, screenStream]) || microphone;

    mixedAudioStream.getAudioTracks().forEach(function (audioTrack) {
      finalStreamToBeRecorded.addTrack(audioTrack);
    });

    screenStream.getVideoTracks().forEach(function (videoTrack) {
      videoTrack.applyConstraints({ cursor: "never" });
      finalStreamToBeRecorded.addTrack(videoTrack);
    });

    var set = finalStreamToBeRecorded.getVideoTracks()[0].getSettings().frameRate;

    blobs = [];
    recorder = RecordRTC(finalStreamToBeRecorded, {

      // audio, video, canvas, gif
      type: 'video',
      // mimeType: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
      mimeType: 'video/webm; codecs="opus, vp9"',
      disableLogs: true,
      timeSlice: 2000,
      ondataavailable: function (blob) {
        that.addBlobToArray(blob);
        rxCount++;
      },

      onAudioProcessStarted: function () {
      },
      checkForInactiveTracks: false,
      onTimeStamp: function (timestamp) { },
      bitsPerSecond: 8000000,
      audioBitsPerSecond: 1280000,
      videoBitsPerSecond: 8000000,
      frameInterval: 90,
      previewStream: function (stream) { },
      video: HTMLVideoElement,
      canvas: {
        width: 640,
        height: 480
      },
      sampleRate: 96000,
      desiredSampRate: 96000,
      bufferSize: 16384,
      numberOfAudioChannels: 2,
      frameRate: 30,
      bitrate: 1280000,
      elementClass: 'multi-streams-mixer'
    });
    recorder.startRecording();
  });
}

function getMixedAudioStreamXYZ(arrayOfAudioStreams) {
  var audioContext = new AudioContext();
  var audioSources = [];
  var gainNode = audioContext.createGain();
  gainNode.connect(audioContext.destination);
  gainNode.gain.value = 0; // don't hear self
  var audioTracksLength = 0;
  arrayOfAudioStreams.forEach(function (stream) {
    if (!stream.getAudioTracks().length) {
      return;
    }
    audioTracksLength++;
    var audioSource = audioContext.createMediaStreamSource(stream);
    audioSource.connect(gainNode);
    audioSources.push(audioSource);
  });
  if (!audioTracksLength) {
    return;
  }

  var audioDestination = audioContext.createMediaStreamDestination();
  audioSources.forEach(function (audioSource) {
    audioSource.connect(audioDestination);
  });
  return audioDestination.stream;
}

class CameraRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recordVideo: null };
    this.videoRef = React.createRef();

    console.log('startCam');
    that = this;
    this.requestUserMedia = this.requestUserMedia.bind(this);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
    this.getUserMedia = this.getUserMedia.bind(this);
    this.initVideoComponent = this.initVideoComponent.bind(this);
    this.requestUserMedia();
    this.initVideoComponent();
  }
componentDidMount(){
  // Wait for media source to be open
  mediaSource = new MediaSource();
  mediaSource.addEventListener('sourceopen', mediaSourceOpen);
  player = document.getElementById('participantVideo');
  player.src = window.URL.createObjectURL(mediaSource);
  player.defaultPlaybackRate = 1;
  function mediaSourceOpen() {
    var mimeType = 'video/webm; codecs="opus, vp9"';
    sourceBuffer = mediaSource.addSourceBuffer(mimeType);
  }
}
  requestUserMedia() {
    this.getUserMedia(stream => {
      this.videoRef.current.srcObject = stream;// window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}));
      handleStream(stream);
    });
  }

  startRecord() {
    this.getUserMedia(stream => {
      this.state.recordVideo = RecordRTC(stream, { type: 'video' });
      this.state.recordVideo.startRecording();
    });
  }
  initVideoComponent(){

  }
  addBlobToArray(blob){
    if(rxCount == 0){
      blob.arrayBuffer().then(data => {
        sourceBuffer.appendBuffer(data);
        player.play();
      });
    } else {
      blob.arrayBuffer().then(data => {
        sourceBuffer.appendBuffer(data);
      });
    }
  }
  stopRecord() {
    this.state.recordVideo.stopRecording(() => {
      this.state.recordVideo.save();
    });
  }

  getUserMedia(callback) {
    navigator.getUserMedia({ audio: true, video: true }, callback, error => alert(JSON.stringify(error)));
  }

  render() {
    return (
      <div>
        <video
          id="video"
          width={320}
          height={240}
          style={{ backgroundColor: "black", marginLeft: "20px", marginTop: "70px", border: "solid orange 1px", borderRadius: "5px" }}
          ref={this.videoRef}
          muted={true}
          autoPlay={true}
          loop
          crossOrigin="anonymous"
        >
        </video>

      </div>
    )
  }
}

export default CameraRecorder;
