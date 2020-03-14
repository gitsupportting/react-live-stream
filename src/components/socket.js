import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import { Decoder, Encoder, tools, Reader } from 'ts-ebml'

// const io = require("socket.io-client"),
// ioClient = socketIOClient.connect("http://192.168.20.17:300");
// var sessionId = "212121";
// var myUserName = "Drew Buckley";
var rxCount = 0
var queue = []
var mediaSource = new MediaSource() // mediaSource.readyState === 'closed'
var video
var sourceBuffer
//var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
var mimeCodec = 'video/webm; codecs="vorbis, vp8"'
var duration = 0

export const sendVideo = stream => {
    
  //Create a byte array to package our video frame into
  //var binaryData = [];
  //binaryData.push(stream);
  queue.push(stream);
  console.log("Tx size = " + stream.size);

  //Add required information to the video frame for processing by the media server
  //var obj = { sessionid: sessionId, name: myUserName, pcname: "abcd", width: "1920", height: "1080", data: binaryData, length: stream.size, privacy: "false" };
  //video1 is the command to process video frames
  //ioClient.emit("video1", obj);

  //document.getElementById('participantVideo').src = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}));

  if (rxCount < 1) {
      initRxVideo();
  }

  if (rxCount === 2) {
                              //var buffer = toBuffer(queue.shift());
                  var buffer = injectMetadata(queue.shift());
                  //sourceBuffer.appendBuffer(new Uint8Array(queue.shift()), {type: 'video/webm; codecs="vorbis, vp8"'});
                  sourceBuffer.appendBuffer(new Uint8Array(buffer), {type: 'video/webm; codecs="vorbis, vp8"'});
      console.log('add meta to 1 frame')
  }
  rxCount++;
  if (rxCount > 3) {
      if (sourceBuffer) {
          if ( queue ) {
              // console.error(" // Queue Count = " + queue.length + " // Current Time = " + video.currentTime);
              if (!sourceBuffer.updating) {
                  sourceBuffer.timestampOffset += 1;
                  //var buffer = toBuffer(queue.shift());
                  //var buffer = injectMetadata(queue.shift());
                  //sourceBuffer.appendBuffer(new Uint8Array(queue.shift()), {type: 'video/webm; codecs="vorbis, vp8"'});
                  sourceBuffer.appendBuffer(new Uint8Array(queue.shift()), {type: 'video/webm; codecs="vorbis, vp8"'});
                  // console.error("Player State - " + video.readyState + " // Duration = " + video.duration);
                  duration = video.duration;
                  video.currentTime += 1;
                  video.play();
              }

              video.onended = function() {
                  console.error("Video has ended")
              };
          }
      }
  }
}

function initRxVideo () {
  // Get video element
  video = document.getElementById('participantVideo')

  // Attach media source to video element
  video.src = window.URL.createObjectURL(mediaSource, {
    type: 'video/webm; codecs="vorbis, vp8"'
  })

  // Wait for media source to be open
  mediaSource.addEventListener('sourceopen', handleSourceOpen.bind(mediaSource))
}

function handleSourceOpen () {
  mediaSource = this // mediaSource.readyState === 'open'

  sourceBuffer = mediaSource.addSourceBuffer(mimeCodec)
  mediaSource.duration = 60
  /*if (queue) {
        sourceBuffer.appendBuffer(new Uint8Array(queue.shift())); 
        console.error("append buffer");
        }*/

  /*setInterval(function(){ 
        if (queue) {
            console.error(" // buffer count = " + queue.length);
            var buff = queue.shift();
            if (buff) {
                sourceBuffer.appendBuffer(new Uint8Array(buff)); 
                console.error("append buffer - " + buff.size + " // buffer count = " + queue.length);
            }
        }
    }, 1000); */
  //sourceBuffer.appendBuffer(new Uint8Array(injectMetadata(queue.shift())), {type: 'video/webm; codecs="vorbis, vp8"'});

  if (video.paused) {
    video.play()
    console.error('start playing')
  }

  sourceBuffer.mode = 'sequence'
  sourceBuffer.addEventListener('updatestart', function (e) {
    console.log('updatestart: ' + mediaSource.readyState)
  })
  sourceBuffer.addEventListener('update', function (e) {
    console.log('update: ' + mediaSource.readyState)
  })
  sourceBuffer.addEventListener('updateend', function (e) {
    console.log('updateend: ' + mediaSource.readyState)
  })
  sourceBuffer.addEventListener('error', function (e) {
    console.log('error: ' + mediaSource.readyState)
  })
  sourceBuffer.addEventListener('abort', function (e) {
    console.log('abort: ' + mediaSource.readyState)
  })
  mediaSource.addEventListener('sourceended', function (e) {
    console.log('sourceended: ' + mediaSource.readyState)
  })
  mediaSource.addEventListener('sourceclose', function (e) {
    console.log('sourceclose: ' + mediaSource.readyState)
  })
  mediaSource.addEventListener('error', function (e) {
    console.log('error: ' + mediaSource.readyState)
  })
  /*video.play();*/
  //var buffer = toBuffer(queue.shift());
  //injectMetadata(buffer);
  //sourceBuffer.appendBuffer(new Uint8Array(queue.shift()), {type: 'video/webm; codecs="vorbis, vp8"'});
}

//const {Decoder, Encoder, tools, Reader} = require('ts-ebml');
var blob

const readAsArrayBuffer = function (blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    reader.onloadend = () => {
      resolve(reader.result)
    }
    reader.onerror = ev => {
      reject(ev.error)
    }
  })
}

const injectMetadata = function (blob) {
  const decoder = new Decoder()
  const reader = new Reader()
  reader.logging = false
  reader.drop_default_duration = false

  readAsArrayBuffer(blob).then(buffer => {
    const elms = decoder.decode(buffer)
    elms.forEach(elm => {
      reader.read(elm)
    })
    reader.stop()

    let refinedMetadataBuf = tools.makeMetadataSeekable(
      reader.metadatas,
      reader.duration,
      reader.cues
    )
    let body = buffer.slice(reader.metadataSize)
    let result = new Blob([refinedMetadataBuf, body], { type: blob.type })

    return result
  })
}

/*const socketFunctions = {
    sendVideo: function(stream){
        //Create a byte array to package our video frame into
        var binaryData = [];
        binaryData.push(stream);
        console.log("Tx size = " + stream.size);
    
        //Add required information to the video frame for processing by the media server
        var obj = { sessionid: sessionId, name: myUserName, pcname: "abcd", width: "1920", height: "1080", data: binaryData, length: stream.size, privacy: "false" };
        //video1 is the command to process video frames
        ioClient.emit("video1", obj);
    
    },
    sendMessage: function(message){
        
    }
}*/

/*export function sendVideo(stream) {
        //Create a byte array to package our video frame into
    var binaryData = [];
    binaryData.push(stream);
    console.log("Tx size = " + stream.size);

    //Add required information to the video frame for processing by the media server
    var obj = { sessionid: sessionId, name: myUserName, pcname: "abcd", width: "1920", height: "1080", data: binaryData, length: stream.size, privacy: "false" };
    //video1 is the command to process video frames
    ioClient.emit("video1", obj);
  
}*/

class Socket extends Component {
  constructor () {
    super()
    this.state = {
      response: 0
    }
  }

  componentDidMount () {
    //Socket.IO onConnect Event
    // ioClient.on('connect', function (socket) {
    //     console.log('Media Server Connected')
    //     //Create the session id on the media server
    //     ioClient.emit("create_session", sessionId);
    //     console.log('Creating Session')
    // });
    // //Rx from Media Server
    // ioClient.on('server_res', function (data) {
    //     //Start the session with sessionid, my name, my pc name, screen width of the pc and screen height of the pc
    //     var obj = { sessionid: sessionId, name: myUserName, pcname: "abcd", width: "1920", height: "1080" };
    //     ioClient.emit("joined_session", obj);
    // });
    // //Rx from Media Server for Join Session
    // ioClient.on('join_session', function (data) {
    //     //Confirmation from the server for the created/joined session with sessionid, my name, my pc name, screen width of the pc and screen height of the pc
    //     var sessionid = data.sessionid;
    //     var userName = data.name;
    //     var userPC = data.pcname;
    //     var screenWidth = data.width;
    //     var screenHeight = data.height;
    //     console.log("Joined Session - " + sessionid + " // " + userName + " // " + userPC + " // " + screenWidth + " // " + screenHeight);
    // });
    // //Rx from Media Server for all InSync Commands sent to the Server
    // ioClient.on('insync', function (data) {
    //     console.log(data)
    //     //Created Session ID (only process if in the same session)
    //     var sessionId = data.sessionId;
    //     //Created Group ID (only process if in the same group)
    //     var groupTo = data.groupTo;
    //     //Who sent this Insync Command
    //     var msgFrom =data.msgFrom;
    //     //Who is it intended for (don't process if not for me)
    //     var msgTo = data.msgTo;
    //     //What is the command
    //     var Command = data.Command;
    //     //Process the senders screen width if required
    //     var screenWidth = data.screenWidth;
    //     //Process the senders screen height if required
    //     var screenHeight = data.screenHeight;
    //     //Any extra command added to the main command
    //     var extraCommand = data.extraCommand;
    //     //Senders video bytes
    //     var insyncBytes = data.insyncBytes;
    //     switch(Command) {
    //         //Used for Chat Messages
    //         case "chat_message":
    //           //Only process the message if meant for me
    //           if (msgFrom != myUserName) {
    //               //send to chat messages within the app
    //               //ipc.send('receiveMessage', extraCommand);
    //           }
    //           break;
    //     }
    // });
    // //video1 is the media server command to process video frames
    // ioClient.on('video1', function (rxDdata) {
    //     //Incomming Video (only process if in the same session)
    //     var sessionid = rxDdata.sessionid;
    //     var userName = rxDdata.name;
    //     var userPC = rxDdata.pcname;
    //     var screenWidth = rxDdata.width;
    //     var screenHeight = rxDdata.height;
    //     //This is the video bytes from the participant
    //     var dataStream = rxDdata.data;
    //     //Temp to test if video is being received (delete)
    //     //if (rxCount < 2) {
    //     console.log("Rx size // " + rxDdata.length);
    //     //Create a byte array
    //     var binaryData = [];
    //     binaryData.push(dataStream);
    //     //Assign the video to display in its element
    //     document.getElementById('participantVideo').src = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}));
    //     //document.getElementById('participantVideo').src = URL.createObjectURL(new Blob(binaryData));
    //     rxCount++;
    //     //}
    // });
  }

  render () {
    const { response } = this.state
    return <div style={{ textAlign: 'center' }}></div>
  }
}

export default Socket
