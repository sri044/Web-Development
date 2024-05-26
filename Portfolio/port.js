let newIcon=document.querySelector('#Menu-icon');
let navbar=document.querySelector('.navbar');

newIcon.onclick= () =>{
  menubar.classlist.toggle('fa-x');
  navbar.classList.toggle('active');
}

function showSidebar(){
  const sideBar= document.querySelector('.sidebar');
  sideBar.style.display = 'flex';

}

function hideSidebar(){
  const sideBar= document.querySelector('.sidebar');
  sideBar.style.display = 'none'; 
}