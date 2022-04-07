var empcart=[];
function Add(){
    var empid=document.getElementById("empid").value;
    var empname=document.getElementById("empname").value;
    var empsal = parseInt(document.getElementById("empsal").value);
    var cart={};
    cart.perid=document.getElementById("empid").value;
    cart.pername=document.getElementById("empname").value;
    cart.persal=document.getElementById("empsal").value;
    empcart.push(cart);

    var html="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>"
    var html1="</table>";
    empcart.forEach(element=>{
        html+="<tr><td>"+ element.perid + "</td><td>"+element.pername+"</td><td>"+element.persal+"</td></tr>"
    });
    document.getElementById("output").innerHTML=html+html1;

}

