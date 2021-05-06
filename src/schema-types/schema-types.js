const defineType = definition => {
  const type = () => ({ definition, required: false });
  type.isRequired = () => ({ definition, required: true });

  return type;
};

const number = defineType({ type: 'number' });

const bool = defineType({ type: 'boolean' });

const string = defineType({ type: 'string' });

const listOfStrings = defineType({
  type: 'array',
  items: {
    type: 'string',
  },
});

function oneOf(values = []) {
  return defineType({ enum: values });
}

function oneOfType(types = []) {
  const allTypes = types.map(type => type().definition.type);

  return defineType({
    type: allTypes,
  });
}

export default {
  bool,
  listOfStrings,
  number,
  oneOf,
  oneOfType,
  string,
};
