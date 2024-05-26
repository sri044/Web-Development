let newIcon=document.querySelector('#Menu-icon');
let navbar=document.querySelector('.navbar');

newIcon.onclick= () =>{
  menubar.classlist.toggle('fa-x');
  navbar.classList.toggle('active');
}

var typed=new Typed(".text",{
  strings:["Frontend Developer", " Java Developer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop: true

});

function showSidebar(){
  const sideBar= document.querySelector('.sidebar');
  sideBar.style.display = 'flex';

}

function hideSidebar(){
  const sideBar= document.querySelector('.sidebar');
  sideBar.style.display = 'none'; 
}