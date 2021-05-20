function Addition()
{
    let number1 = +document.getElementById('int').value;
    let number2 = +document.getElementById('int1').value;
    result =(number1+number2);
    document.getElementById('result').innerHTML="Resutl Addition : "+result;
}
function Subtraction()
{
    let number1 = +document.getElementById('int').value;
    let number2 = +document.getElementById('int1').value;
    result =(number1-number2);
    document.getElementById('result').innerHTML="Result Subtraction : "+result;
}
function Multiplication()
{
    let number1 = +document.getElementById('int').value;
    let number2 = +document.getElementById('int1').value;
    result =(number1*number2);
    document.getElementById('result').innerHTML="Resutl Multipcation : "+result;
}
function Division()
{
    let number1 = +document.getElementById('int').value;
    let number2 = +document.getElementById('int1').value;
    result =(number1/number2);
    document.getElementById('result').innerHTML="Resutl Division : "+result;
}