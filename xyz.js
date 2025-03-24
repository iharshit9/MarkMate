function demo()
{
x=document.getElementById("t1").value;
var re=/^\w{5}$/;
if(re.test(x))
{
document.getElementById('s1').innerHTML="welcome";
}
else
{
document.getElementById('s1').innerHTML="invalid data";
}
}