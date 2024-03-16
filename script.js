//your JS code here. If required.
let ColorSelect = document.getElementById('colorSelect');
let SelectRemove = document.getElementById('btn');
SelectRemove.addEventListener("click",()=>{
  ColorSelect.options[ColorSelect.selectedIndex].remove();
})
