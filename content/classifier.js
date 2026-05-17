function getLabelText(el) {

  if (!el.labels) return "";

  return Array.from(el.labels)
    .map(label => label.innerText)
    .join(" ");

}

function detectFieldType(el) {

  const text = (

    (el.name || "") + " " +
    (el.id || "") + " " +
    (el.placeholder || "") + " " +
    (el.getAttribute("aria-label") || "") + " " +
    getLabelText(el)

  ).toLowerCase();

  const rules = {
 fullName: [
    "fullname",
    "full name",
    "name",
    "your name",
    "complete name"
  ],
    firstName: [
      "first",
      "fname",
      "given",
      "firstname",
      "first name"
    ],

    lastName: [
      "last",
      "lname",
      "surname",
      "lastname",
      "last name"
    ],

    email: [
      "email",
      "mail",
      "e-mail"
    ],

    phone: [
      "phone",
      "mobile",
      "tel",
      "telephone"
    ],

    address: [
      "address",
      "street"
    ],

    city: [
      "city",
      "town"
    ],

    pincode: [
      "zip",
      "postal",
      "zipcode",
      "pincode"
    ]

  };

  for (const [type, keywords] of Object.entries(rules)) {

    if (
      keywords.some(keyword =>
        text.includes(keyword)
      )
    ) {
      return type;
    }

  }

  return null;

}