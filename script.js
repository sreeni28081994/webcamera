// camera stream video element
  let on_stream_video = document.querySelector('#camera-stream');
  // flip button element
  let flipBtn = document.querySelector('#flip-btn');

  // default user media options
  let constraints = { audio: false, video: true }
  let shouldFaceUser = true;

  // check whether we can use facingMode
  let supports = navigator.mediaDevices.getSupportedConstraints();
  if( supports['facingMode'] === true ) {
    flipBtn.disabled = false;
  }

  let stream = null;

  function capture() {
    constraints.video = {
        width: {
        min: 192,
        ideal: 192,
        max: 192,
      },
      height: {
        min: 192,
        ideal: 192,
        max: 192
      },
      facingMode: shouldFaceUser ? 'user' : 'environment'
    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then(function(mediaStream) {
        stream  = mediaStream;
        on_stream_video.srcObject = stream;
        on_stream_video.play();
      })
      .catch(function(err) {
        console.log(err)
      });
  }

  flipBtn.addEventListener('click', function(){
    if( stream == null ) return
    // we need to flip, stop everything
    stream.getTracks().forEach(t => {
      t.stop();
    });
    // toggle / flip
    shouldFaceUser = !shouldFaceUser;
    capture();
  })

  capture();

  document.getElementById("capture-camera").addEventListener("click", function() {
    // Elements for taking the snapshot
      const video = document.querySelector('video');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
  });





  const input = document.querySelector("input");
const preview = document.querySelector(".preview");
const para = document.querySelector(".no-pic");
const image = document.querySelector(".profile-img");
input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {

  const curFiles = input.files;

//  para.style.display = "none";
  image.src = URL.createObjectURL(curFiles[0]);
  image.style.opacity = 1;
}

document.getElementById("clear").addEventListener("click",function(){

  a=1;
  document.getElementById("picdiv").style.display="none"
  document.getElementById("camera-stream").style.display="none"
  document.getElementById("canvas").style.display="none"
  document.getElementById("basediv").style.display="inline-block"
  document.getElementById("capture-camera").style.display="none"





})


function resetForm(){
  $("#image_preview").html("");
  return true;
}
