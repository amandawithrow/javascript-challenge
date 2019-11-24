// from data.js
var tableData = data;


//use d3 to get reference to the table body
var tbody = d3.select("tbody");


//create variable for reference to submit button on form
var submitButton = d3.select("#filter-btn");

// Use arrow function to fill table upon load
    tableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

function searchTable(){
    // Prevent the page from refreshing
    //d3.event.preventDefault();
    
    //Clear HTML table
    tbody.html("");
    //take value of date inputted
    //create variable to reference search criteria from form box
    var dateInput = d3.select("#datetime");
    var filterDate = dateInput.property("value");
    var results = []
    console.log("created filter")
    console.log(filterDate)
    //iterate through tableData to find matches and build array of objects matching criteria
    for (var i = 0; i < tableData.length; i++){
        if (tableData[i].datetime === filterDate){
            results.push(tableData[i])
        }
    }
    //fill table with filtered data
    results.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

//create listener for click of submit button to call function
submitButton.on("click", searchTable);