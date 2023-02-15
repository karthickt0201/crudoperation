// CRUD start
var selectedRow = null

function onFormSubmit() {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
}

function readFormData() {
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["email"] = document.getElementById("email").value;
    return formData; 
    // formData["username"] = localStorage.setItem("username",username);
    // formData["email"] = localStorage.setItem("email",email);

    // var obj = {
    //     username: formData["username"],
    //     email: formData["email"],
    // };
    
    // localStorage.setItem("obj",JSON.stringify(obj));
    // localStorage.getItem("obj",JSON.stringify(obj));
    // console.log("Obj");
    
}

function insertNewRecord(data) {
    // var obj = JSON.parse(localStorage.getItem("obj")) ?? []
    // obj.forEach(function(value, ) {
    // var table = document.getElementById("table3").getElementsByTagName('tbody');
    // table.innerHTML += `
    // <tbody>
    // <tr>
    // <td>${username.formData["username"]}</td>
    // <td>${email.formData["email"]}</td>
    // <td><button type="submit" class="btn btn-primary" onClick="onEdit(this)"> Edit </button></td>
    // <td><button type="submit" class="btn btn-danger" onClick="onDelete(this)"> Delete </button></td>
    // </tr>
    // </tbody>`
    // });
    var table = document.getElementById("table2").getElementsByTagName('tbody')[0];
    var obj = table.insertRow(table.length);
    cell1 = obj.insertCell(0);
    cell1.innerHTML = data.username;
    cell2 = obj.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = obj.insertCell(2);
    cell3.innerHTML = `<button type="submit" class="btn btn-primary" onClick="onEdit(this)"> Edit </button>`;
    cell4 = obj.insertCell(3);
    cell4.innerHTML = `<button type="submit" class="btn btn-danger" onClick="onDelete(this)"> Delete </button>`;
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    document.getElementById("box1").style.visibility = "visible";
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("heading").innerHTML = "Update Users";
    document.getElementById("add").innerHTML = "Update";

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.email;
}
 
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table2").deleteRow(row.rowIndex);
        resetForm();
    }
} 
// CRUD End
// Logout Event
function logout(){
    window.location.assign("Register.html");
}

// Onclick Function Start
document.getElementById("submit").addEventListener('click',function(e){
        e.preventDefault();
        valid();
        crud();
    }) 
//Onclick Function Start
// Add Users Open
    function show(){
        document.getElementById("box1").style.visibility = "visible";
        document.getElementById("heading").innerHTML = "Add Users";
        document.getElementById("add").innerHTML = "Add Users";
    }
    function hide(){
        document.getElementById("box1").style.visibility = "hidden";
    }
// Add Users Close

// Input Validation Start
var email = document.getElementById("email");
var username = document.getElementById("username");
email.addEventListener("input", emailvalid)
function emailvalid(){
    var email = document.getElementById("email").value;
    switch(email.length){
        case 0:
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("small2").innerText = "Invalid Email Id";          
        case 4:
            document.getElementById("email").style.border = "1px solid red";
            document.getElementById("small2").innerText = "Please Enter Atleast 5 Character";      
            case 5:
              document.getElementById("email").style.border = "1px solid red";
              document.getElementById("small2").innerText = "Please Enter Atleast 5 Character";            
        default:
            document.getElementById("email").style.border = "1px solid green";
            document.getElementById("small2").innerText = "";
    }
}
username.addEventListener("input",namevalid)
function namevalid(){
    var username = document.getElementById("username").value;
    switch(username.length){
        case 0:
            document.getElementById("username").style.border = "1px solid red";
            document.getElementById("small1").innerText = "Invalid Email Id";
            case 5:
              document.getElementById("username").style.border = "1px solid red";
              document.getElementById("small1").innerText = "Please Enter Atleast 8 Character";
              case 6:
                document.getElementById("username").style.border = "1px solid red";
                document.getElementById("small1").innerText = "Please Enter Atleast 8 Character";
            case 7:
              document.getElementById("username").style.border = "1px solid red";
              document.getElementById("small1").innerText = "Please Enter Atleast 8 Character";
            default:
            document.getElementById("username").style.border = "1px solid green";
            document.getElementById("small1").innerText = "";        
    }
}
// Input Validation End
// Validation Start
function valid(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var email = document.form.name.value;
    var username = document.form.email.value;

        if(username==null || username ==""){
            document.getElementById("small1").innerText = "Invalid Name";
            document.getElementById("username").style.border = "1px solid red";
        }else{
            document.getElementById("username").style.border = "";
            document.getElementById("small1").innerText = "";     
        }

        if(email==null || email==""){
          document.getElementById("email").style.border = "";
          document.getElementById("small2").innerText = " ";
        }else{
          document.getElementById("email").style.border = "1px solid green";
          document.getElementById("small2").innerText = "";
        }  
    }

    function crud(){
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
      if(username.length > 5 && email.length > 7){
        onFormSubmit();
    }    
 }
    
    var table = document.getElementById("table3");
    var input = document.getElementById('btnsearch');
    var tableData = [{username1: 'Abi', email1: "suresh@gmail.com",  }, {username1: 'Murugan', email1: "tiraviyam@gmail.in",}, {username1: 'kathiravan', email1: "thiravian@gmail.io",}, {username1: 'Vignesh', email1: "david@gmail.os",}];
    var caretUpClassName = 'fa fa-caret-up';
    var caretDownClassName = 'fa fa-caret-down';
    const sort_by = (field, reverse, primer) => {
      const key = primer ?
        function(x) {
          return primer(x[field]);
        } :
        function(x) {
          return x[field];
        };
      reverse = !reverse ? 1 : -1;
      return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      };
    };
    
    
    function clearArrow() {
      let carets = document.getElementsByClassName('caret');
      for(let caret of carets) {
        caret.className = "caret";
      }
    }
    
    function toggleArrow(event) {
      let element = event.target;
      let caret, field, reverse;
      if(element.tagName === 'SPAN') {
        caret = element.getElementsByClassName('caret')[0];
        field = element.id
      }else{
        caret = element;
        field = element.parentElement.id
      }
    
      let iconClassName = caret.className;
      clearArrow();
      if(iconClassName.includes(caretUpClassName)) {
        caret.className = `caret ${caretDownClassName}`;
        reverse = false;
      }else{
        reverse = true;
        caret.className = `caret ${caretUpClassName}`;
      }
      tableData.sort(sort_by(field, reverse));
      populateTable();
    }
    

    function populateTable(array = []) {
      table.innerHTML = '';
      for (let data of tableData) {
        let row = table.insertRow(-1);
        let username1 = row.insertCell(0);
        username1.innerHTML = data.username1;
    
        let email1 = row.insertCell(1);
        email1.innerHTML = data.email1;
    
        let edit = row.insertCell(2);
        edit.innerHTML = `<button type="submit" class="btn btn-primary" onClick="onEdit(this)"> Edit </button>`;
    
        let expiry = row.insertCell(3);
        expiry.innerHTML = `<button type="submit" class="btn btn-danger" onClick="onDelete(this)"> Delete </button>`;
      } 
      filterTable();
    } populateTable(tableData);
    
    
    function filterTable() {
      let filter = input.value.toUpperCase();
      rows = table.getElementsByTagName("TR");
      // row = table.g
      var flag = false;
      for (let row of rows) {
       let cells = row.getElementsByTagName("TD");
        for (let cell of cells) {
          if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
            flag = true;
          }else {   
            cell.style.backgroundColor = '';
          }
        }        
        if (flag) {
          row.style.display = "";
          document.getElementById("found").style.display = "none";
         }else {
          row.style.display = "none";
          document.getElementById("found").style.display = "";
        }
        flag = false;
      } 
    }
  populateTable();
    
    let tableColumns = document.getElementsByClassName('table-column');
    for (let column of tableColumns) {
      column.addEventListener('click', function(event) {
        toggleArrow(event);
      });
    }
    /*
    document.getElementById("btnsearch2").addEventListener('keyup', function(a){
      var namefilter = this.value;
      namefilter = namefilter.toUpperCase();
      var table2 = document.getElementById("table2");
      var tab = table2.getElementsByTagName('tr');
     for (var i = 0; i < tab.length; i++) {
      var name = tab[i].getElementsByTagName('td')[0];
      var name3 = name.innerText || name.textContent;
      if(name3.indexOf(tab) > -1){
        console.log("found");
      }else{
        console.log("not found");
      }
    }
    }) */
    var btnsearch2 = document.getElementById("btnsearch2");
    btnsearch2.addEventListener("keyup", function(a){
        var key = this.value;
        key = key.toUpperCase();
        var flag = false;
        var table = document.getElementById("table2");
        var sef = document.getElementsByTagName("tr");
        for(var i =0; i<sef.length; i++){
            var name = sef[i].getElementsByTagName("td")[0];
            if(name){
                var namevalue = name.textContent || name.innerText;
                namevalue = namevalue.toUpperCase();
                if(namevalue.indexOf(key) > -1){
                  sef[i].style.display ="";
                  document.getElementById("found").style.display = "none";
                }
                else{
                  sef[i].style.display ="none";
                  document.getElementById("found").style.display = "";
                }
                // else if(namevalue.indexOf(key) < 1){
                //   document.getElementById("found").style.display = "";
                // }
                
                // if(flag == true){
                  // document.getElementById("found").style.display = "none";

                // }else{
                //   sef[i].style.display ="none";
                //   document.getElementById("found").style.display = "";
                // }
            }
        }
    })

    var btnsearch3 = document.getElementById("btnsearch3");
    btnsearch3.addEventListener("keyup", function(a){
        var key = this.value;
        key = key.toUpperCase();
        var table = document.getElementById("table2");
        var sef = document.getElementsByTagName("tr");
        for(var i =0; i<sef.length; i++){
            var name = sef[i].getElementsByTagName("td")[1];
            if(name){
                var namevalue = name.textContent || name.innerText;
                namevalue = namevalue.toUpperCase();
                if(namevalue.indexOf(key) > -1){
                  sef[i].style.display ="";
                  document.getElementById("found").style.display = "none";
                }
                else{
                  sef[i].style.display ="none";
                  document.getElementById("found").style.display = "";
                }
            }
        }
    })


    input.addEventListener('keyup', function(event) {
      filterTable();
    });

        // sorting ascending
        var desc = false;
        document.getElementById("sortname").addEventListener("click", () => {
          var array = sort_array(tableData, 'name', desc);
          populateTable(tableData);
          desc = !desc;

        })
        function showimg(){
          var image = document.getElementById('image');
          if (image.src.match("up")) {
              image.src = "down.png";
          }
          else {
              image.src = "up.jpg   ";
          }
        }
        document.getElementById("sortemail").addEventListener("click", () => {
          var array = sort_array(tableData, 'email', desc);
          populateTable(tableData);
          desc = !desc;
        })
        function sort_array(array, sort, desc){
          
          array.sort(function(a,b){
            if (a[sort] < b[sort]) return -1;
            if (a[sort] > b[sort]) return 1;
            return 0;    
        });
        if(desc)array.reverse();
        return array;
        }
        // sorting descending
    // Validation End
    /*
    function adduser(){
        fetch("https://jsonplaceholder.typicode.com/comments?postId=3",{
            method: 'POST',
            body:JSON.stringify({
                name document.getElementById("name").value,
                email: document.getElementById("email").value,
            }),

            headers:{
                "Content-type": "application/json; "
            }            
        })
        .then(res => res.json()).then(data => console.log(Response));
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var nme = localStorage.setItem("name",name);
        var eml = localStorage.setItem("email",email);
    } */

    // fetch("https://jsonplaceholder.typicode.com/comments?postId=3").then(
    //         (res)=>res.json()).then((Response)=>{
    //             var tmpData = "";
    //             console.log(Response);
    //             Response.forEach((user) => {
    //                 tmpData+="<tr>";
    //                 tmpData+="<td>"+user.name+"</td>";
    //                 tmpData+="<td>"+user.email+"</td>";
    //                 tmpData+="<td><button class = 'btn-primary btn'>Edit</button></td>";
    //                 tmpData+="<td><button class = 'btn-danger btn'>Delete</button></td>";                                  
    //                 tmpData+="</tr>";
    //             })
    //             document.getElementById("tbdata").innerHTML = tmpData;
    //         }) 

// sorting 
// function sortListDir() {
//     var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
//     list = document.getElementById("table3");
//     switching = true;
//     // Set the sorting direction to ascending:
//     dir = "asc"; 
//     // Make a loop that will continue until no switching has been done:
//     while (switching) {
//       // start by saying: no switching is done:
//       switching = false;
//       b = list.getElementsByTagName("tbody");
//       // Loop through all list-items:
//       for (i = 0; i < (b.length - 1); i++) {
//         //start by saying there should be no switching:
//         shouldSwitch = false;
//         /* check if the next item should switch place with the current item,
//         based on the sorting direction (asc or desc): */
//         if (dir == "asc") {
//           if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//             /* if next item is alphabetically lower than current item,
//             mark as a switch and break the loop: */
//             shouldSwitch = true;
//             break;
//           }
//         } else if (dir == "desc") {
//           if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
//             /* if next item is alphabetically higher than current item,
//             mark as a switch and break the loop: */
//             shouldSwitch= true;
//             break;
//           }
//         }
//       }
//       if (shouldSwitch) {
//         /* If a switch has been marked, make the switch
//         and mark that a switch has been done: */
//         b[i].parentNode.insertBefore(b[i + 1], b[i]);
//         switching = true;
//         // Each time a switch is done, increase switchcount by 1:
//         switchcount ++;
//       } else {
//         /* If no switching has been done AND the direction is "asc",
//         set the direction to "desc" and run the while loop again. */
//         if (switchcount == 0 && dir == "asc") {
//           dir = "desc";
//           switching = true;
//         }
//       }
//     }
//   }