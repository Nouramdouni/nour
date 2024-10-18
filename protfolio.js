    var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

 
btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// const photo = document.querySelector('.img');

// setInterval(() => {
//     photo.classList.toggle('show-border');
// }, 3000);

  document.querySelector('#cv-btn').addEventListener('click', function() {
    console.log('CV image clicked. Download started.');
    
  })
  var modal = document.getElementById("myModal");


  var btn2 = document.getElementById("myBtn2");
  
  
  var span = document.getElementsByClassName("close")[0];
  
   
  btn2.onclick = function() {
    modal.style.display = "block";
  }
  
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }