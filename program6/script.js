let present=0;
let absent=0;

function markAttendance()
{
    let name=document.getElementById("name").value;
    let status=document.getElementById("status").value;
    if(name=="")
    {
        alert("Enter Student Name.");
        return;
    }
    document.getElementById("list").innerHTML+="<div class='student'>"+name+"-"+status+"<div>";
    if(status=="Present")
        present++;
    else
        absent++;
    document.getElementById("count").innerHTML="Present:"+present+"| Absent:"+absent;
    document.getElementById("name").value=="";
}