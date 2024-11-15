function click(){
alert("thanks for buying son")
}
function deleteRow(button) {
    // Find the row that contains the button
    var row = button.closest("tr");
  
    // Remove the row from the table
    row.remove();
  }
  