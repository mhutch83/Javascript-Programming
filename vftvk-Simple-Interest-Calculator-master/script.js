function compute()
{
    //lets create the variables we'll need to make the
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Create a variable to store the interest
    var interest = principal * years * rate / 100;

    //Now create a variable to the final amount
    var amount = parseInt(principal) + parseFloat(interest);

    //Initialize the result input to "result" id
    var result = document.getElementById("result");
    //
    var year = new Date().getFullYear() + parseInt(years);

//Validdate whether or not the user entered a valid number non 0 - negative number
    if(principal <=0)
    {
        alert("Please enter a positive number!");
        Document.getElementById("principal").focus();
    } else{
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\>at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + ", \<br\>You will receieve an amount of $" + "<mark>" + amount + "</mark>" + ", \<br\>in the year" + "<mark>" + year + "</mark>" + "\<br\>";
    }
  }
function updateRate()
{
    //This variable receives the value from the 'rate' slider and places it in the rate_val span
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}