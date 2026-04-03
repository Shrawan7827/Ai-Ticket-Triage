// Submit Ticket Function
async function submitTicket() {
  try {
    console.log("Button clicked");

    const messageInput = document.getElementById("message");
    const message = messageInput.value.trim();

    // Check if empty
    if (!message) {
      alert("Please enter a message");
      return;
    }

    const res = await fetch("http://localhost:5000/tickets/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    if (!res.ok) {
      throw new Error("API request failed");
    }

    const data = await res.json();
    console.log("Response:", data);

    // Show result
    document.getElementById("result").innerHTML = `
      <h3>Analysis Result</h3>
      <p><b>Message:</b> ${data.message}</p>
      <p><b>Category:</b> ${data.category}</p>
      <p><b>Priority:</b> ${data.priority}</p>
      <p><b>Confidence:</b> ${data.confidence}</p>
      <p><b>Keywords:</b> ${data.keywords.join(", ")}</p>
    `;

    // Clear input
    messageInput.value = "";

    // Reload tickets
    loadTickets();

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Check console.");
  }
}

// Load All Tickets
async function loadTickets() {
  try {
    const res = await fetch("http://localhost:5000/tickets");

    if (!res.ok) {
      throw new Error("Failed to fetch tickets");
    }

    const data = await res.json();

    const container = document.getElementById("tickets");
    container.innerHTML = "";

    data.forEach(ticket => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <p><b>${ticket.message}</b></p>
        <p>${ticket.category} | ${ticket.priority}</p>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading tickets:", error);
  }
}

// Load tickets when page loads
window.onload = loadTickets;