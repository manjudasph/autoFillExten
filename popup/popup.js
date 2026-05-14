const fields = [
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