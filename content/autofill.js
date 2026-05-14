function setNativeValue(element, value) {

  const lastValue = element.value;

  element.value = value;

  const tracker = element._valueTracker;

  if (tracker) {
    tracker.setValue(lastValue);
  }

  element.dispatchEvent(
    new Event("input", {
      bubbles: true
    })
  );

  element.dispatchEvent(
    new Event("change", {
      bubbles: true
    })
  );

}

function fillMatches(matches) {

  matches.forEach(({ field, value }) => {

    try {

      if (field.type === "checkbox") {

        field.checked =
          value === true ||
          value === "true";

        field.dispatchEvent(
          new Event("change", {
            bubbles: true
          })
        );

        return;
      }

      if (field.tagName === "SELECT") {

        field.value = value;

        field.dispatchEvent(
          new Event("change", {
            bubbles: true
          })
        );

        field.style.outline =
          "2px solid green";

        return;
      }

      setNativeValue(field, value);

      field.style.outline =
        "2px solid green";

    }

    catch (err) {

      console.error(
        "Autofill Error:",
        err
      );

    }

  });

}