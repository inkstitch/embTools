const addClient= document.querySelector(".addClientEntry");
const clientTable=document.querySelector("#clientDatabase");
const clientDatabase=JSON.parse(localStorage.getItem('Clients')) || [];

addClient.addEventListener('submit', addEntry);

outputClients();

function addEntry(e){
  e.preventDefault();
  const name=this.querySelector("#clientName").value;
  const email=this.querySelector("#clientEmail").value;
  const phone=this.querySelector("#clientPhone").value;
  const mobile=this.querySelector("#clientMobile").value;
  const address=this.querySelector("#address").value;
  const billing=this.querySelector("#billingAddress").value;
  const business=this.querySelector("#businessName").value;
  const notes=this.querySelector("#notes").value
  const newClient={
    name: name, email:email, phone:phone, mobile:mobile, address:address, billing:billing, business:business, notes:notes
  }

  clientDatabase.push(newClient);
  saveStorage();
  outputClients();
  this.reset();
  window.location.reload();
}

function saveStorage(){
  localStorage.setItem('Clients', JSON.stringify(clientDatabase));
}

function outputClients(){
  let html=clientDatabase.map(function(data, i){
    return '<tr data-index='+i+'><td>'+data.name+'</td><td>><a href="mailto:'+data.email+'">'+data.email+'</a></td><td>'+data.phone+'</td><td>'+data.mobile+'</td><td>'+data.address+'</td><td>'+data.billing+'</td><td>'+data.business+'</td><td>'+data.notes+'</td><td><button class="deleteEntry"></button></td></tr>'
  })
  clientTable.innerHTML=html.join('');

}


// JSON download to Backup Database
let button = document.querySelector("#exporting");

button.addEventListener('click', function(){

var json = localStorage.Clients;

let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(json);

let filename = 'Clients.json';

let elem = document.createElement('a');
elem.setAttribute('href', dataUri);
elem.setAttribute('download', filename);
elem.click();

});

// Delete Entry

const deleteDatabaseEntry=document.querySelectorAll(".deleteEntry");

for(var i = 0; i < deleteDatabaseEntry.length; i++){
   deleteDatabaseEntry[i].addEventListener('click', function(e){

     const myEl=e.target;
     const mySel=myEl.parentElement;
     let index= mySel.parentElement.dataset.index;
     let temp = clientDatabase.splice(index, 1);
     saveStorage();
     outputClients();
     window.location.reload();
   })
}

// Search Database

function searchDatabase(){
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchDatabase");
  filter = input.value.toUpperCase();
  table = document.getElementById("clientDatabase");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Upload Backup File

let upload=document.querySelector("#backupFile");

upload.addEventListener('change', handleFileUpload);

let reader=new FileReader();
reader.onload=handleFileRead;

function handleFileUpload(event){
  var file=event.target.files[0];
  reader.readAsText(file);
  console.log(file);
}

function handleFileRead(event){
  let save = JSON.parse(event.target.result) || [];
  window.localStorage.setItem('Clients', JSON.stringify(save));
  javascript:window.location.reload();
  outputClients();

}



// Destroy Database

let clear=document.querySelector("#destroyDB");

clear.addEventListener('click', function(){
  javascript:localStorage.clear();
  javascript:window.location.reload();
})
