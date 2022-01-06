let textField = document.getElementById("eq").value;
let btns = document.getElementsByClassName("clickable");
var clear = false;
for(let btn in btns)
{
   btns[btn].onclick = concat_;
}
function concat_()
{
   if(clear == true)
      textField ="";
   textField+=this.value;
   document.getElementById("eq").value = textField;
   clear = false;
}
function eval_(){
   clear = true;
   textField = eval(textField);
   document.getElementById("eq").value = textField;
}
