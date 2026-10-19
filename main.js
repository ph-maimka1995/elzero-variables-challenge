// Define Variables
let theTitle = "Elzero",
  theDesc = "Elzero Web School",
  theDate = "25/10";

// Template Literal Markup
let card = `
  <div class="card">
    <h3>Hello ${theTitle}</h3>
    <p>${theDesc}</p>
    <span>${theDate}</span>
  </div>
`;

// Render Output Repeatedly
document.write(card.repeat(4));
