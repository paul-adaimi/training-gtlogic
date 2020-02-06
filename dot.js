let clicked=false;

function myFunc(){
  if(!clicked){
    clicked=true;
    toggleClassfromId("myButton","button1","button2");
    toggleClassfromId("myMenu","menu1","menu2");
    toggleClassfromId("myDropDown","dropdown1","dropdown2");
  }

  else{
    clicked=false;
    toggleClassfromId("myButton","button2","button1");
    toggleClassfromId("myMenu","menu2","menu1");
    toggleClassfromId("myDropDown","dropdown2","dropdown1");
  }

}

function toggleClassfromId(id,from,to){
  document.getElementById(id).classList.add(to);
  document.getElementById(id).classList.remove(from);
}
