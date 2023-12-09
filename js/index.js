//for the timing of quickview section
//to set the deadline of sales
const countDownDate = new Date('Dec 17, 2023 00:00:00').getTime();
//to update the count down every 1 second
const runner = setInterval(function () {
  //to get today's date and time
  const now = new Date().getTime();
  //to get the distance from the deadline and the present day
  let distance = countDownDate - now;
  //time calculations
  //for days
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //for hours
  let hours = Math.floor((distance % (1000 * 60 * 24)) / (1000 * 60 * 60));
  //for minutes
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //for seconds
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //to assign the outputs to the supposed elements
  document.getElementById('first').innerHTML = days + ' :';
  document.getElementById('second').innerHTML = hours + ' :';
  document.getElementById('third').innerHTML = minutes + ' :';
  document.getElementById('fourth').innerHTML = seconds;
  //to display deadline message when count down is over
  if (distance < 0) {
    clearInterval(runner);
    const wish = document.querySelector('.wish');
    const timeDisplay = document.querySelector('.timer-container');
    
    timeDisplay.style.display = 'none';
    wish.style.display = 'block';
  }
}, 1000);

//for text color change
//for the change effect on modal
let text1 = ['orange',
  'deeppink',
  'purple',
  'blue'
];
let text2 = ['deeppink',
  'purple',
  'blue',
  'orange'
];
let text3 = ['purple',
  'blue',
  'orange',
  'deeppink'
];

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
let timer = setInterval(change, 1000);
function change() {
  one.style.color = text1[counter1];
  counter1++;
  if (counter1 >= text1.length) {
    counter1 = 0;
    //uncomment this to stop refreshing after first cycle
  }

  two.style.color = text2[counter2];
  counter2++;
  if (counter2 >= text2.length) {
    counter2 = 0;
    //uncomment this to stop refreshing after first cycle
  }

  three.style.color = text3[counter3];
  counter3++;
  if (counter3 >= text3.length) {
    counter3 = 0;
    //uncomment this to stop refreshing after first cycle
  }
}

//for background change 
let image = ['omah3.jpg',
'omah10.jpg',
'omah6.jpg',
'omah8.jpg'];

let counter4 = 0;

const div = document.querySelector('.timer-container');
let timer2 = setInterval(changer, 7000);

function changer() {
 div.style.backgroundImage = " url(/images/" + image[counter4] + ")";
    counter4++;
    if (counter4 >= image.length) {
        counter4 = 0;
        //clearInterval(inst); //uncomment this to stop refreshing after first cycle
    }
}

        function changeMenu(m) {
          m.classList.toggle('change');

          let sideMenu = document.querySelector('.side-container');

          sideMenu.classList.toggle('show');
        }

        //for gallery
        const gallery = document.querySelector('.gallery-container');
        const galleryOpener = document.querySelectorAll('.gallery-opener');
        const galleryClose = document.querySelector('.gallery-close');
        
        galleryOpener.forEach(open => {
          open.addEventListener('click', (e) => {
            if(gallery.style.display = 'none') {
              gallery.style.display = 'block';
            }
          });
        });
        galleryClose.addEventListener('click', (e) => {
          gallery.style.display = 'none';
        })

        //for image modal
        const modalImage = document.querySelector('.modal-image');
        const modalOpener = document.querySelectorAll('.gallery-body img');
        const modalClose = document.querySelector('.modal-close');
        const innerImage = document.querySelector('.inner-image');

        modalOpener.forEach(open => {
          open.addEventListener('click', (e) => {
            if(modalImage.style.display = 'none') {
              modalImage.style.display = 'block';
            }

            innerImage.src = e.target.src;
          });
        });

        modalClose.addEventListener('click', (e) => {
          modalImage.style.display = 'none';
        })

        //for wish list
        const wishList = document.querySelector('.wish-container');
        const wishOpener = document.querySelectorAll('.wish-opener');
        const wishClose = document.querySelector('.wish-close');
        
        wishOpener.forEach(open => {
          open.addEventListener('click', (e) => {
            if(wishList.style.display = 'none') {
              wishList.style.display = 'block';
            }
          });
        });
        wishClose.addEventListener('click', (e) => {
          wishList.style.display = 'none';
        })

        //for account details modal
        const accModal = document.querySelector('.acc-modal');
        const accOpener = document.querySelectorAll('.wish-box button');
        const accClose = document.querySelector('.acc-close');

        accOpener.forEach(open => {
          open.addEventListener('click', (e) => {
            if(accModal.style.display = 'none') {
              accModal.style.display = 'block';
            }
          });
        });

        accClose.addEventListener('click', (e) => {
          accModal.style.display = 'none';
        })

        //for services
        const services = document.querySelector('.service-container');
        const serviceOpener = document.querySelectorAll('.service-opener');
        const serviceClose = document.querySelector('.service-close');
        
        serviceOpener.forEach(open => {
          open.addEventListener('click', (e) => {
            if(services.style.display = 'none') {
              services.style.display = 'block';
            }
          });
        });
        serviceClose.addEventListener('click', (e) => {
          services.style.display = 'none';
        })

const goLeftBtn = document.querySelector('.previous-btn');
const scrollDownBtn = document.querySelector('.next-btn');
let displayContainer = document.querySelector('.display-container');

goLeftBtn.onclick = () => {
  displayContainer.scrollLeft -= 150;
}

scrollDownBtn.onclick = () => {
  displayContainer.scrollLeft += 150;
}