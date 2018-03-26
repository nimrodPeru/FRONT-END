/*document.querySelector('h1').addEventListener('click',()=>{
    document.body.style.background= 'green'
})
*/
//tomar el id
var centesimas = 0;
setInterval(CountTalleres,5);
function CountTalleres () {
    if (centesimas < 150) {
        centesimas++;
        Consultoria.innerHTML = centesimas+"+";
        
    }            
}
 

setInterval(CountTalleres1,10);    
function CountTalleres1 () {
    if (centesimas < 16) {
        centesimas++;
        Consultoria1.innerHTML = centesimas+"+";
        
    }
}

