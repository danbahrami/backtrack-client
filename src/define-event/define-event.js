function getSchemaRequiredFields(schemaTypes) {
  return Object.keys(schemaTypes).reduce(
    (acc, property) =>
      schemaTypes[property]().required ? [...acc, property] : acc,
    [],
  );
}

function getSchemaProperties(schemaTypes) {
  return Object.keys(schemaTypes).reduce(
    (acc, property) => ({
      ...acc,
      [property]: schemaTypes[property]().definition,
    }),
    {},
  );
}

function createJSONSchema(schemaTypes = {}) {
  const required = getSchemaRequiredFields(schemaTypes);
  const properties = getSchemaProperties(schemaTypes);

  return {
    type: 'object',
    properties,
    required,
  };
}

export default function defineEvent(name, schema) {
  if (!name) {
    throw new Error('No name provided to defineEvent');
  }

  return (properties = {}) => ({
    name,
    properties,
    schema: createJSONSchema(schema),
  });
}
