window.addEventListener("load", () => {

  chrome.storage.local.get(
    "profile",

    (res) => {

      const profile =
        res.profile || {};

      console.log(
        "PROFILE:",
        profile
      );

      const fields =
        scanFields();

      console.log(
        "FIELDS:",
        fields
      );

      const matches =
        matchFields(
          fields,
          profile
        );

      console.log(
        "MATCHES:",
        matches
      );

      if (matches.length > 0) {

        createFloatingPanel(
          matches
        );

      }

    }

  );

});