export default function defineEvent(name) {
  if (!name) {
    throw new Error('No name provided to defineEvent');
  }

  return () => ({
    name,
  });
}
