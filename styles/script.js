const form = document.getElementById("form");

const firstNameInput = document.getElementById("firstName");
const secondNameInput = document.getElementById("secondName");
const emailInput = document.getElementById("email");
const displayArea = document.getElementById("displayArea");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = 
    firstNameInput.value.trim();
    const secondName =
    secondNameInput.value.trim();
    const email =
    emailInput.value.trim();

    const infoDiv =
    document.createElement("div");
    infoDiv.innerHTML = `
      <h3>Submitted info:</h3>
      <p>First Name: ${firstName}</p>
      <p>Second Name: ${secondName}</p>
      <p>Email: ${email}</p>
      <hr />
     ` ; 
   
      
      displayArea.appendChild(infoDiv);

      
});