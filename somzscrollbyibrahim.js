
window.onscroll=function()
{
console.log(window.pageYOffset);
var o =window.pageYOffset;
document.getElementById('man').textContent=o;
if(o >= 500){
    
   window.document.getElementById('clickscroll').style.display="block";
   
}
else{
    window.document.getElementById('clickscroll').style.display="none";

}


};
var h=pageYOffset;

window.document.getElementById('clickscroll').onclick=function(){
  id= setInterval(farm,5);
  function farm(){
      if (window.pageYOffset ==0)
      {
          clearInterval(id)
      }
      else{
          scrollTo(0,window.pageYOffset-20)
      }
  }

    
}


