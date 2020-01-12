
// Creating a new line

let newLine = document.querySelector("#newLine");
const table = document.querySelector("#substrateInfo");

newLine.addEventListener('click', addLine);

function addLine(){
    // Create and Append New Row Element
     let line = document.createElement("tr");
     line.setAttribute("class", "lines");
     table.appendChild(line);
     // Create Quantity Inpute
     let th = document.createElement("th")
     let qt = document.createElement("input");
     qt.setAttribute("type","number");
     qt.setAttribute("value","0");
     qt.setAttribute("class","quantity");
     th.appendChild(qt);
     line.appendChild(th);
     // Create Model Inpute
     let th2 = document.createElement("th");
     let model = document.createElement("input");
     model.setAttribute("type","string");
     model.setAttribute("placeholder","Model Number");
     model.setAttribute("class","model");
     th2.appendChild(model);
     line.appendChild(th2);
     // Create Description Inpute
     let th3 = document.createElement("th");
     let description = document.createElement("input");
     description.setAttribute("type","text");
     description.setAttribute("placeholder","Description");
     description.setAttribute("class","description");
     th3.appendChild(description);
     line.appendChild(th3);
     // Create Substrate Size Inpute
     let th4 = document.createElement("th");
     let size = document.createElement("input");
     size.setAttribute("type","text");
     size.setAttribute("placeholder","Size of Substrates");
     size.setAttribute("class","size");
     th4.appendChild(size);
     line.appendChild(th4);
     // Create Colors Inpute
     let th5 = document.createElement("th");
     let color = document.createElement("input");
     color.setAttribute("type","text");
     color.setAttribute("placeholder","Colors Used");
     color.setAttribute("class","colors");
     th5.appendChild(color);
     line.appendChild(th5);
     // Create Base Price Input
     let th6 = document.createElement("th");
     let price = document.createElement("input");
     price.setAttribute("type","number");
     price.setAttribute("step","0.01");
     price.setAttribute("value","0");
     price.setAttribute("class","basePrice");
     th6.appendChild(price);
     line.appendChild(th6);
     // Create Line Cost Input and Buttons
     let th7 = document.createElement("th");
     let lineCost = document.createElement("button");
     let input = document.createElement("input");

     lineCost.setAttribute("class","lineCost");
     th7.appendChild(lineCost);
     input.setAttribute("value","0");
     input.setAttribute("class","indyPrice");
     input.setAttribute("type","number");
     input.setAttribute("span","0.01");
     lineCost.appendChild(input);
     line.appendChild(th7);

     // Attach Event Listeners to Newly Created Elements

line.addEventListener("input", addEvent);

function addEvent(){
  let price = parseFloat(this.querySelector(".basePrice").value);
  let quantity = parseFloat(this.querySelector(".quantity").value);

  this.querySelector(".indyPrice").value = price * quantity;

  let subTotal = parseFloat(this.querySelector(".indyPrice").value);
 let mainSubTotal = parseFloat(document.querySelector("#sub").value);

 document.querySelector(".subtotal").value = subTotal + mainSubTotal;
}

   }

// Final Quote


   // Total Cost of Goods
   let row = document.querySelectorAll(".lines");

   for(var i = 0; i < row.length; i++){
    row[i].addEventListener('input', function(){
      let price = parseFloat(this.querySelector(".basePrice").value);
      let quantity = parseFloat(this.querySelector(".quantity").value);

      this.querySelector(".indyPrice").value = price * quantity;

      let subTotal = parseFloat(this.querySelector(".indyPrice").value);
     let mainSubTotal = parseFloat(document.querySelector("#sub").value);

     document.querySelector(".subtotal").value = subTotal + mainSubTotal;

    })

   }



   // Creating Quote
   let button = document.querySelector("#quotebutton")
    button.addEventListener('click', function(){

      let totalCost = parseFloat(document.querySelector("#sub").value);
      let embroideryPrice = parseFloat(document.querySelector("#priceEmbroidery").value);
      let setup = parseFloat(document.getElementById("embroiderySetup").value);
      let stitches = parseFloat(document.querySelector("#stitchCount").value);
      let markup = parseFloat(document.querySelector("#embroideryMarkup").value);
      let discount = parseFloat(document.querySelector("#embroideryDiscount").value);

   document.querySelector("#quoteButton").innerHTML = "$" + (setup +(((markup / 100) * totalCost) + totalCost) + ((embroideryPrice / 1000) * stitches) - ((discount / 100) * totalCost));
  })


//Print function

let print = document.querySelector("#printButton");

print.addEventListener("click",printNow);

function printNow(){
  javascript:window.print();
}
