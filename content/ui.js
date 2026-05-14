function createFloatingPanel(matches) {

  const oldPanel =
    document.getElementById(
      "smart-autofill-panel"
    );

  if (oldPanel) {
    oldPanel.remove();
  }

  const panel =
    document.createElement("div");

  panel.id =
    "smart-autofill-panel";

  let html = `

    <div style="
      font-weight:bold;
      margin-bottom:8px;
    ">
      Smart Autofill
    </div>

  `;

  matches.forEach((match) => {

    html += `

      <div style="
        margin-bottom:4px;
      ">
        ✔ ${match.type}
      </div>

    `;

  });

  html += `

    <button id="fillAllBtn">
      Fill All
    </button>

  `;

  panel.innerHTML = html;

  Object.assign(panel.style, {

    position: "fixed",

    bottom: "20px",

    right: "20px",

    background: "#222",

    color: "white",

    padding: "12px",

    borderRadius: "10px",

    zIndex: "999999",

    width: "220px",

    fontSize: "14px",

    boxShadow:
      "0 0 10px rgba(0,0,0,0.3)"

  });

  document.body.appendChild(panel);

  const btn =
    panel.querySelector(
      "#fillAllBtn"
    );

  btn.onclick = () => {
    fillMatches(matches);
  };

}