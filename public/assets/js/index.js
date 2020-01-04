
function runTableQuery() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: "/api/tables", method: "GET" })
    .then(function (tableData) {

      // Here we then log the tableData to console, where it will show up as an object.
      console.log(tableData);
      console.log("------------------------------------");

      // Loop through and display each of the customers
      for (var i = 0; i < tableData.length; i++) {

        // Get a reference to the tableList element and populate it with tables
        var tableList = $("#tableList");

        // Then display the fields in the HTML (Section Name, Date, URL)
        var listItem = $("<li class='list-group-item mt-4'>");

        listItem.append(
          $("<h2>").text("Table #" + i ),
          $("<hr>"),
          $("<h2>").text("ID: " + tableData[0].customerID),
          $("<h2>").text("Name: " + tableData[0].customerName),
          $("<h2>").text("Email: " + tableData[0].customerEmail),
          $("<h2>").text("Phone: " + tableData[0].phoneNumber)
        );

        tableList.append(listItem);
      }
    });
}

runTableQuery();
