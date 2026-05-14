function matchFields(fields, profile) {

  const matches = [];

  fields.forEach((field) => {

    const type =
      detectFieldType(field);

    console.log(field, type);

    if (!type) return;

    const value = profile[type];

    if (!value) return;

    matches.push({
      field,
      type,
      value
    });

  });

  return matches;

}