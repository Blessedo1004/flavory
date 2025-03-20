// Change nav background on scroll
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.style.backgroundImage = "url('images/dark_bg.png'"; 
     }
      else {
      navbar.style.backgroundImage = "none"; 
       
    }
  });
  
    // Number Increment
  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.getElementsByClassName('counter');
    const duration = 12000; // Duration of the animation in milliseconds

    function updateCounter(counter, start, end) {
        let count = start;
        const increment = (end - start) / (duration / 100); // Calculate the increment value

        function animate() {
            count += increment;
            if (count < end) {
                counter.textContent = Math.floor(count) + '+';
                requestAnimationFrame(animate);
            } else {
                counter.textContent = end + '+';
            }
        }
        animate();
    }
    // Viewport visibility for the increment
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const start = parseInt(entry.target.getAttribute('data-start'));
                const end = parseInt(entry.target.getAttribute('data-end'));
                updateCounter(entry.target, start, end);
                observer.unobserve(entry.target); // Stop observing after the animation starts
            }
        });
    });

    Array.from(counters).forEach(counter => {
        observer.observe(counter);
    });
});

// Menu Toggling

function menu1(){
  var menu1= document.getElementById('menu1');
  var menu2= document.getElementById('menu2');
  var menu3= document.getElementById('menu3');
  var menu4= document.getElementById('menu4');
  var img1 = document.getElementById('menu-image1');
  var img2 = document.getElementById('menu-image2');
  var img3 = document.getElementById('menu-image3');
  var img4 = document.getElementById('menu-image4');
  var img5 = document.getElementById('menu-image5');
  var img6 = document.getElementById('menu-image6');
  menu1.style.color = "#c42900";
  menu1.style.textDecoration = "underline";
  menu2.style.color = "black";
  menu2.style.textDecoration = "none";
  menu3.style.color = "black";
  menu3.style.textDecoration = "none";
  menu4.style.color = "black";
  menu4.style.textDecoration = "none";
  img1.src = "images/sl1.png"; 
  img2.src = "images/sl2.png";
  img3.src = "images/sl3.png";
  img4.src = "images/sl4.png";
  img5.src = "images/sl5.png";
  img6.src = "images/dish_06.png";
}

function menu2(){
  var menu1= document.getElementById('menu1');
  var menu2= document.getElementById('menu2');
  var menu3= document.getElementById('menu3');
  var menu4= document.getElementById('menu4');
  var img1 = document.getElementById('menu-image1');
  var img2 = document.getElementById('menu-image2');
  var img3 = document.getElementById('menu-image3');
  var img4 = document.getElementById('menu-image4');
  var img5 = document.getElementById('menu-image5');
  var img6 = document.getElementById('menu-image6');
  menu2.style.color = "#c42900";
  menu2.style.textDecoration = "underline";
  menu1.style.color = "black";
  menu1.style.textDecoration = "none";
  menu3.style.color = "black";
  menu3.style.textDecoration = "none";
  menu4.style.color = "black";
  menu4.style.textDecoration = "none";
  img1.src = "images/dish_01.png"; 
  img2.src = "images/dish_02.png";
  img3.src = "images/dish_03.png";
  img4.src = "images/dish_04.png";
  img5.src = "images/dish_05.png";
  img6.src = "images/dish_06.png";
}

function menu3(){
  var menu1= document.getElementById('menu1');
  var menu2= document.getElementById('menu2');
  var menu3= document.getElementById('menu3');
  var menu4= document.getElementById('menu4');
  var img1 = document.getElementById('menu-image1');
  var img2 = document.getElementById('menu-image2');
  var img3 = document.getElementById('menu-image3');
  var img4 = document.getElementById('menu-image4');
  var img5 = document.getElementById('menu-image5');
  var img6 = document.getElementById('menu-image6');
  menu3.style.color = "#c42900";
  menu3.style.textDecoration = "underline";
  menu1.style.color = "black";
  menu1.style.textDecoration = "none";
  menu2.style.color = "black";
  menu2.style.textDecoration = "none";
  menu4.style.color = "black";
  menu4.style.textDecoration = "none";
  img1.src = "images/dst1.png"; 
  img2.src = "images/sd1.png";
  img3.src = "images/sd2.png";
  img4.src = "images/sd3.png";
  img5.src = "images/sd4.png";
  img6.src = "images/sd6.png";
}

function menu4(){
  var menu1= document.getElementById('menu1');
  var menu2= document.getElementById('menu2');
  var menu3= document.getElementById('menu3');
  var menu4= document.getElementById('menu4');
  var img1 = document.getElementById('menu-image1');
  var img2 = document.getElementById('menu-image2');
  var img3 = document.getElementById('menu-image3');
  var img4 = document.getElementById('menu-image4');
  var img5 = document.getElementById('menu-image5');
  var img6 = document.getElementById('menu-image6');
  menu4.style.color = "#c42900";
  menu4.style.textDecoration = "underline";
  menu1.style.color = "black";
  menu1.style.textDecoration = "none";
  menu2.style.color = "black";
  menu2.style.textDecoration = "none";
  menu3.style.color = "black";
  menu3.style.textDecoration = "none";
  img1.src = "images/dst1.png"; 
  img2.src = "images/dst2.png";
  img3.src = "images/dst3.png";
  img4.src = "images/dst4.png";
  img5.src = "images/dst5.png";
  img6.src = "images/dst6.png";
}
// OffCanvas Functions

function offCanvasClose(){
  document.getElementById('offcanvas-container').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.body.style.overflow = 'visible';
}

function offCanvasOpen(){
  document.getElementById('offcanvas-container').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.body.style.overflow = 'hidden';
}


  window.onloadstart=(menu1());