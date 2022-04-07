
   
   

    var html="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>"
    var html1="</table>";
    


var empcart=[];
class Employee{
    empclass(){
        var empid=document.getElementById("empid").value;
        var empname=document.getElementById("empname").value;
        var empsal = parseInt(document.getElementById("empsal").value);
        var cart={};
        cart.perid=document.getElementById("empid").value;
        cart.pername=document.getElementById("empname").value;
        cart.persal=document.getElementById("empsal").value;
        empcart.push(cart);

    


    }
    display(){
        var html2="";
        empcart.forEach(element=>{
            html2+="<tr><td>"+ element.perid + "</td><td>"+element.pername+"</td><td>"+element.persal+"</td><td class='del'>Delete</td></tr>"
           



        });document.getElementById("output").innerHTML=html+html2+html1;
         


    }
}

    var empl= new Employee();
    function Addclass(){
        empl.empclass();
        empl.display();
    }
   



