function sayHello(){

    let name=document.getElementById("name").value;
    let greeting="Hello "+name+" !";
    
    document.getElementById("output").textContent=greeting;


}