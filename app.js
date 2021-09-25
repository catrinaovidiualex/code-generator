let citat=document.querySelector(".alt-citat")

function generareCitat(){

    let nr=Math.floor(Math.random()*data.length);
    return data[nr];

}


function setCitat(obj){

    let main=document.querySelector("main");
    main.innerHTML=`

    <h3>${obj.citat} </h3>

    <p>${obj.autor} , ${obj.an}</p>
    
    `
}


citat.addEventListener("click",()=>{
    
    setCitat(generareCitat());
})