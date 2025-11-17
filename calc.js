let result=document.getElementById("inputText");
let calculate=(number)=>{
  result.value +=number;
}
let computeResult=()=>{
  try {
    result.value=eval(result.value);
  } catch (error) {
    result.value="error"
  }
}
let clearResult=()=>{
  result.value="";
}
let deleteLast=()=>{
  result.value=result.value.slice(0,-1);
}