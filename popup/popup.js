// IMPORT PROFILE
document.getElementById("importBtn").onclick = () => {
  document.getElementById("importInput").click();
};

document.getElementById("importInput").onchange = (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const profile = JSON.parse(e.target.result);
      chrome.storage.local.set({ profile }, () => {
        alert("Profile Imported");
        // Update UI fields
        fields.forEach((field) => {
          const input = document.getElementById(field);
          if (input) input.value = profile[field] || "";
        });
      });
    } catch (err) {
      alert("Invalid profile file.");
    }
  };
  reader.readAsText(file);
};
// DOWNLOAD PROFILE
document.getElementById("downloadBtn").onclick = () => {
  chrome.storage.local.get("profile", (res) => {
    const profile = res.profile || {};
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(profile, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "autofill-profile.json");
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    document.body.removeChild(dlAnchor);
  });
};
const fields = [
  "fullName",
  "firstName",
  "lastName",
  "email",
  "phone",
  "address",
  "city",
  "pincode"
];

// LOAD PROFILE
chrome.storage.local.get("profile", (res) => {

  const profile = res.profile || {};

  fields.forEach((field) => {

    const input = document.getElementById(field);

    if (input) {
      input.value = profile[field] || "";
    }

  });

});

// SAVE PROFILE
document.getElementById("saveBtn").onclick = () => {

  const profile = {};

  fields.forEach((field) => {

    profile[field] =
      document.getElementById(field).value;

  });

  chrome.storage.local.set(
    { profile },

    () => {
      alert("Profile Saved");
      console.log(profile);
    }
  );

};