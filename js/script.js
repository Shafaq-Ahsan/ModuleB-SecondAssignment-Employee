$(document).ready(function () {
    // $('#datatable').dataTable();
    $("[data-toggle=tooltip]").tooltip();
//    document.getElementById("btn_click").click()
$("#add").modal();

});
var abc;

function calculate(){
      var b = document.getElementById("secondNumber").value;
   console.log(abc(Number(b)));
       var table = document.getElementById("tableBody");
    var tablerow = document.createElement("tr");
    
    
    var d1 = document.createElement("td");
    var t1 = document.createTextNode("Total salary :"+abc(Number(b)));
    d1.appendChild(t1);
    tablerow.appendChild(d1);
    table.appendChild(tablerow);

}

function clickAdd() {
    var fname = document.getElementById("addFirst").value;
    var lname = document.getElementById("addSecond").value;
      var third = document.getElementById("addThird").value;
        var fourth = document.getElementById("addFourth").value;
   abc = cal(Number(fname),Number(lname),Number(third),Number(fourth));
   
 
    document.getElementById("close").click()

}
function cal (_1,_2,_3,_4){
    
 return function perform (b){
                if(b <= 20000 && b>=10000){
                    var a = b * (_1/100);
                    return a+b;
                }
                else if(b <= 30000 && b>=20001){
                    var a = b * (_2/100);
                    return a+b;
                }
                else if(b <= 40000 && b>=30001){
                    var a = b * (_3/100);
                    return a+b;
                }
                else if(b <= 50000 && b>=40001){
                    var a = b * (_4/100);
                    return a+b;
                }
                else{
                    var a = b * (_1/100);
                    return a+b;
                }

}
}


