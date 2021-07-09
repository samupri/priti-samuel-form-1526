// DECLARING VARIABLES 
// Declare variables that will store references for 

// <input type="button" id="submit-button">,
let fm = document.getElementById('contact');
// <input type="text" id="fullname">
let fn = document.getElementById('fname');
// <input type="text" id="email">
let em = document.getElementById('email');
// <textarea id="message"></textarea>
let mg = document.getElementById('message');

// Declare variable that will store regular expression for email
let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function validateForm(ev)
{   
        // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    
    // Declare object that will store the form-data
    let data = {};
           
    // Declare array that will store the errors
    let errors = [];

    //Create variable for error message
    var errMsg = null;

    // Prevent form submission so that you can do validation
    ev.preventDefault();


    // +-----------+    
    // | FULL NAME |
    // +-----------+

    // Check if fullname is not empty
    if(fn.value !== '')
    {
        // If so: Pass the collected value to your object "data"
        data.fname = fn.value; 
    }
    else
    {
        // Otherwise: Create a corresponding error-message and add it to your array "errors".
        errMsg="User Name is missing";
        errors.push(errMsg);
    
        // End your conditional here.
    }

    // +-------+    
    // | EMAIL | 
    // +-------+

    // Check if email is not empty.
    if (em.value !== '')
    {
       // Check if email is valid.
       if(pattern.test(em.value))
       {
           // If so: Pass the collected value to your object "data".
           data.email = em.value;
       }
       else
       {
           // Otherwise: Create a corresponding error-message and add it to your array "errors".
           errMsg="Invalid email";
            errors.push(errMsg);
            
       // End your nested conditional here.
       }
    }
    
    else
    {
        // Otherwise: Create a corresponding error-message and add it to your array "errors"
        errMsg = "Email is missing";
        errors.push(errMsg);
     
    // End your outer conditional here.
    }

    
    // +---------+    
    // | MESSAGE | 
    // +---------+

    // Check if message is not empty.
    if (mg.value !== '')
    {
    // If so: Pass the collected value to your object "data".
        data.message=mg.value;
    } 
    else
    {
    // Otherwise:
       // Create a corresponding error-message and add it to your array "errors"
       errMsg = "Message is missing"
       errors.push(errMsg);
       

    // End your conditional here.
    }

    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
    
    if(errors.length != 0 )
    {
       // If so: Print it in JavaScript console.
        console.log("ERRORS : \n");
        console.log(errors);
        
    }

    else
    {
        // Otherwise: Print the data in JavaScript console.
        console.log("DATA : \n"); 
        console.log(data);   

        // Clear text-fields
        fname.value='';
        email.value='';
        message.value='';


    // End your conditional here.
    }
    // Close your function here

}

// Register your form to "click" event.
fm.addEventListener("submit", validateForm);