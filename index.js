    import {id ,name,salary} from "./index2.js"
    console.log(id);
   

    var html="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th>Updated Salary</th></tr>"
    var html1="</table>";
    var html2="";
    html2+=`<tr>
    <td>${id}</td>
    <td>${name}</td>
    <td>${salary}</td>
    <td></td>
    </tr>`;
    document.getElementById("output").innerHTML=html+html2+html1;
    


var empcart=[];
class Employee{
    empclass(){
         var empid=document.getElementById("empid").value;
         var empname=document.getElementById("empname").value;
         var empsal = parseInt(document.getElementById("empsal").value);
        // constructor(id,name,basicsalary){
        //     this.id=id;
        //     this.name=name;
        //     this.basicsalary=basicsalary;

        // }
        var cart={};
        cart.perid=document.getElementById("empid").value;
        cart.pername=document.getElementById("empname").value;
        cart.persal=document.getElementById("empsal").value;
        empcart.push(cart);
    }
        // var myjson=JSON.stringify(empcart);
        display(){
            // var html2="";

            //     html2+="<tr><td>"+this.id+"</td><td>"+this.name+"</td><td>"+this.basicsalary+"</td><td class='del'>Delete</td></tr>"
               
    
    
    
            // ; document.getElementById("output").innerHTML=html+html2+html1;
            try{
                var html2="";
                empcart.forEach((element) => {
                    var mul=element.persal*1.10;
                    html2+="<tr><td>"+element.perid+"</td><td>"+element.pername+"</td><td>"+element.persal+"</td><td>"+mul+"</td></tr>"
                });
                document.getElementById("output").innerHTML=html+html2+html1;

            } catch (error){
                console.log(error)
            }
             
    
    
        }

    


    }
    

      document.getElementById("button").addEventListener("click", ()=>{
        var empl=new Employee();
        empl.empclass();
        empl.display();

      });

        // empl.empclass();
        // empl.display();
    //     var empid=document.getElementById("empid").value;
    //  var empname=document.getElementById("empname").value;
    // var empsal = parseInt(document.getElementById("empsal").value);
    
  
    
   



