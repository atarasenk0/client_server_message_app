// Server implementation
// A. Tarasenko 
// 15/04/2022

// Implementation based on examples from:
// https://github.com/telstra/MessagingAPI-SDK-node


// -----------------------------------------------
// API related imports
// -----------------------------------------------
import { Message } from '/node_modules/@telstra/messaging/dist/index.js';
import AUTH_CONFIG from './credentials';
import { TrialNumbers } from '/node_modules/@telstra/messaging';
import { Numbers } from '/node_modules/@telstra/messaging';

//export const TELSTRA_CLIENT_ID="<client_key>";
//export const TELSTRA_CLIENT_SECRET="<client_secret>"
// -----------------------------------------------


// -----------------------------------------------
// Assign client element values to variables
// -----------------------------------------------
const myForm        = document.getElementById("inputForm");
const senderName    = document.getElementById("senderName");
const senderMobile  = document.getElementById("senderMobile");
const senderMessage = document.getElementById("senderMessage");
// -----------------------------------------------


// -----------------------------------------------
// Create event listener for the send event
// addEventListener section is based on the following example:
// https://sebhastian.com/javascript-csv-to-array/
// -----------------------------------------------
myForm.addEventListener("submit", function (e) {
    // Prevent page refresh (default)
    e.preventDefault();

    // Step 1.
    // Perform authentication step 
    // Required prior to any "interaction"
    const message = new Message(AUTH_CONFIG);
    console.log(message);

    // Step 2.
    // Acquire dedicated sender number
    const numbers = new Numbers();

    // Step 3.
    // Register destination numbers
    // Required for free trial accounts
    const trialNumber = new TrialNumbers();
    
    // Step 4.
    // 

    // debug
    console.log("Testing");

});
// -----------------------------------------------

