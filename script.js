function displayNum(num){
    result.value+=num
}
function clearBox()
{
    result.value=""
}
function evaluateExpression()
{
    let curVal=result.value;
    let res=eval(curVal)
    result.value=eval(result.value)
}
function delNum()
{
 result.value= result.value.slice(0,-1)  
}