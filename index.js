//event com target
/*
document.querySelector("ul").addEventListener("click", function(e){
    if(e.target.tagName=== 'LI'){
        e.target.style.color="blue"
    }
})
    */

const entrada1= document.getElementById("entrada1");
const entrada2= document.getElementById("entrada2");
const mensagem= document.getElementById("sms");
const mostrar= document.getElementById("show");
entrada1.addEventListener("input", (e)=>{
    dig= e.target.value;  

        mensagem.textContent=dig;
    
})


/*
function LimparCampos(){
 entrada1.value=" ";
  entrada2.value=" ";

}



const formulario= document.getElementById("form");

formulario.addEventListener("submit",function(e){
    e.preventDefault();
    LimparCampos();
    
    alert("formulario enviado")

})

*/