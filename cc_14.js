// Task 2: Adding Support Tickets Dynamically

function buildSupportTicket(name, issue, priority) { // creates a functon
    // grabs an element by its ID
    const ticketContainer = document.getElementById("ticketContainer");

    // create an element and assigns attributes
    const ticket = document.createElement("div");
    ticket.setAttribute("class", "ticketClass");


    // declares the writing inside the ticket
    ticket.innerHTML = `<h2>${name}</h2><p>${issue}</p><h4>${priority}</h4>`;

    // creates button, assigns an ID, and gives it some text
    resolveButton = document.createElement("button");
    resolveButton.setAttribute("id", "resolveBtn");
    resolveButton.textContent = "Resolve";

    // Task 4: Implementing Ticket Resolution with Event Bubbling
    resolveButton.addEventListener("click", (event) => { // creates event listener on click
        ticketContainer.removeChild(ticket); // removes the ticket when resolved
        event.stopPropagation(); 
    });

    // uses an event listener on click to log the message in the console
    ticket.addEventListener("click", () => console.log(`${name}'s ticket has been clicked`));


    //adds resolve button to the html
    ticket.appendChild(resolveButton);

    // task 3: using an if statement to give all high prio tickets a different class name
    if (priority === "High") {
        ticket.classList.add("highPriority");
    }

    //adds the tickets to the container
    ticketContainer.appendChild(ticket);
}

// test cases for task 2
buildSupportTicket("Barry Bonds", "Computer wont connect to the WiFi", "Medium");
buildSupportTicket("Hank Aaron", "Company WiFi is out - Contact ISP", "High");
buildSupportTicket("Mickey Mantle", "Need signature added to Outlook", "Low");

// Task 3: Converting NodeLists to Arrays for Bulk Updates

// these lines grab all of the elements with a certain class, then make that list an array
const highPrioTickets = document.querySelectorAll(".highPriority");
const highPrioArray = Array.from(highPrioTickets);

// using a forEach method to go through each ticket and update the color and border
highPrioArray.forEach(ticket => {
    ticket.style.backgroundColor = "red";
});