function scanFields() {

  return Array.from(

    document.querySelectorAll(
      "input, textarea, select"
    )

  );

}