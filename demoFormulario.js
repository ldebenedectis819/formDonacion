const op1 = document.getElementById('opcion-1')
const op2 = document.getElementById('opcion-2')
const op3 = document.getElementById('opcion-3')
const op4 = document.getElementById('opcion-4')
const op5 = document.getElementById('opcion-5')
const op6 = document.getElementById('opcion-6')
const amountquantity = document.getElementById("amountquantity")


op1.onclick = function () {
    amountquantity.style.display = "none";
}
op2.onclick = function () {
    amountquantity.style.display = "none";
}
op3.onclick = function () {
    amountquantity.style.display = "none";
}
op4.onclick = function () {
    amountquantity.style.display = "none";
}
op5.onclick = function () {
    amountquantity.style.display = "none";
}
op6.onclick = function () {
    amountquantity.style.display = "block";
} 

///////////////////////////////////////////////////////////////////

function habilitarMensual(){
    const op1 = document.getElementById('opcion-1-monthly')
    const op2 = document.getElementById('opcion-2-monthly')
    const op3 = document.getElementById('opcion-3-monthly')
    const op4 = document.getElementById('opcion-4-monthly')
    const op5 = document.getElementById('opcion-5-monthly')
    const otroMonto = document.getElementById('opcion-6-monthly')
    const op6 = document.getElementById('amountquantity')
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const surname= document.getElementById("surname").value
    const name= document.getElementById("firstName").value
    const check= document.getElementById("checkmont")
    val= 0;

         if(!op1.checked && !op2.checked && !op3.checked && !op4.checked && !op5.checked && !otroMonto.checked){
          val++ }

        if(phone === ""){
            val++
        }
        if(email === ""){
            val++
        }
        if(surname === ""){
            val++
        }
        if(name === ""){
            val++
        }
        if (check.checked === false){
            val++
        }
        if(val== 0 ){
             document.getElementById("botondonar3").disabled = false
        } else {
             document.getElementById("botondonar3").disabled = true
        }
}

////////////////////////////////////////////////////


function habilitarUnica(){
const op1 = document.getElementById('opcion-1')
const op2 = document.getElementById('opcion-2')
const op3 = document.getElementById('opcion-3')
const op4 = document.getElementById('opcion-4')
const op5 = document.getElementById('opcion-5')
const otroMonto = document.getElementById('opcion-6')
const op6 = document.getElementById('amountquantity')
val= 0;

    if(!op1.checked && !op2.checked && !op3.checked && !op4.checked && !op5.checked && !otroMonto.checked){
      val++ }

      if(val== 0 ){
        document.getElementById("botondonar2").disabled = false
   } else {
        document.getElementById("botondonar2").disabled = true
   }

}

//////////////////////////// mostrar froms////////////////////////////////

function mostrarFormulario1(){
document.getElementById('op-1-text').style.display = 'block'
document.getElementById('op-2-text').style.display = 'none'
document.getElementById('form1').reset()
document.getElementById("botondonar2").disabled = true
}

function mostrarFormulario2(){
document.getElementById('op-1-text').style.display = 'none'
document.getElementById('op-2-text').style.display = 'block'
document.getElementById('form2').reset()
document.getElementById("botondonar3").disabled = true
}

//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

const op1m = document.getElementById('opcion-1-monthly')
const op2m = document.getElementById('opcion-2-monthly')
const op3m = document.getElementById('opcion-3-monthly')
const op4m = document.getElementById('opcion-4-monthly')
const op5m = document.getElementById('opcion-5-monthly')
const op6m = document.getElementById('opcion-6-monthly')
const amountquantity2 = document.getElementById("amountquantity2")


op1m.onclick = function () {
    amountquantity2.style.display = "none";
}
op2m.onclick = function () {
    amountquantity2.style.display = "none";
}
op3m.onclick = function () {
    amountquantity2.style.display = "none";
}
op4m.onclick = function () {
    amountquantity2.style.display = "none";
}
op5m.onclick = function () {
    amountquantity2.style.display = "none";
}
op6m.onclick = function () {
    amountquantity2.style.display = "block";
} 