// manipulate the register details
document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //send the data to the server
    const response = await fetch("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    //console
    console.log("cannot", response);
    const data = await response.json();
    if (data.success) {
      alert("new user created");
    } else {
      alert(data.message);
    }
  });

//logic for login manipulation
