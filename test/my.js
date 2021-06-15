function check()
{
let num=+document.getElementById('number').value;
document.write(num+" ==> ")
while(num>0)
{
let m=num%10;
document.write(m+"");
num=Math.floor(num/10);
}
}