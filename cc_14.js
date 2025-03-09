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

    //adds resolve button to the html
    ticket.appendChild(resolveButton);

    //adds the tickets to the container
    ticketContainer.appendChild(ticket);
}

// test cases for task 2
buildSupportTicket("Barry Bonds", "Computer wont connect to the WiFi", "Medium");
buildSupportTicket("Hank Aaron", "Company WiFi is out - Contact ISP", "High");
buildSupportTicket("Mickey Mantle", "Need signature added to Outlook", "Low");