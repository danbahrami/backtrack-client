export default function defineEvent(name, schema) {
  if (!name) {
    throw new Error('No name provided to defineEvent');
  }

  return properties => ({
    name,
    properties,
    schema,
  });
}
