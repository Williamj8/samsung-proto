 // make it as global to access in all functions
 var videosList = [
    "http://media.w3.org/2010/05/sintel/trailer.mp4",
    "http://media.w3.org/2010/05/bunny/trailer.mp4",
    "http://media.w3.org/2010/05/bunny/movie.mp4",
    "http://vjs.zencdn.net/v/oceans.mp4"
];
window.onload = function() {
  // for videos
    var vid = document.createElement('source');
    vid.src = videosList[0]; // playing first video in the array by default
    document.getElementById('myVideo').appendChild(vid);


  // for images

  var images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/200/300'

  ];

  var allPics = images.length;
  var i = 0;

  for (; i < allPics; i++) {
    var a = document.createElement('a');
    // a.href = 'example.html';
    var img = document.createElement('img');
    img.src = images[i];
    img.id = i; // for the refrence of clicked image
    a.appendChild(img);
    a.addEventListener("click", clickFn, false); 
    document.getElementById('myImg').appendChild(a);
  }

}

/**click function for the image of the image */
clickFn = function(e){
     var video = document.getElementById('myVideo');
     video.src = videosList[parseInt(e.srcElement.id,10)];
     video.play();
}

// _______________________________________OOOOO________OOO__________________
    // var carousel = document.querySelector('.carousel');
    // var slider = document.querySelector('.slider');

    // var next = document.querySelector('.next');
    // var prev = document.querySelector('.prev');
    // var imagesA = document.querySelector('.carousel-img');
    // var vid = document.querySelector('.videos');
    // var direction;



    // var videos = [
    //     "videos/Coca-Colas new Share A Coke ad 2018.mp4",
    //     "videos/KITKAT Senses - Time Traveller TV Advert (Short).mp4",
    //     "videos/The Worlds Shortest Escalator.mp4",
    //     "videos/tv ads  tiny top-ups (short version)  Orange UK.mp4"
    // ];

    // function playArray(index, ele, array, listener) {
    //     ele.src = array[index];
    //     index++
    //     if (index >= array.length) {
    //         index = +1;
    //     }
    //     // setTimeout(function () {
    //     //     playArray(index, ele, array, listener);
    //     // }, 5000);
    // }
    // playArray(0, document.getElementById("myVideo"), videos);

    // imagesA.addEventListener('click', function () {
    //   alert('aa')
    // });



    // next.addEventListener('click', function () {
    //     direction = -1;
    //     carousel.style.justifyContent = 'flex-start';
    //     slider.style.transform = 'translate(-20%)';
    // });

    // prev.addEventListener('click', function () {
    //     if (direction === -1) {
    //         direction = 1;
    //         slider.appendChild(slider.firstElementChild);
    //     }
    //     carousel.style.justifyContent = 'flex-end';
    //     slider.style.transform = 'translate(20%)';

    // });



    // slider.addEventListener('transitionend', function () {
    //     // get the last element and append it to the front

    //     if (direction === 1) {
    //         slider.prepend(slider.lastElementChild);
    //     } else {
    //         slider.appendChild(slider.firstElementChild);
    //     }

    //     slider.style.transition = 'none';
    //     slider.style.transform = 'translate(0)';
    //     setTimeout(() => {
    //         slider.style.transition = 'all 0.5s';
    //     })
    // }, false);

