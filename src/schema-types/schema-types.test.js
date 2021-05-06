import SchemaTypes from './schema-types';

describe('SchemaTypes', () => {
  describe('#bool', () => {
    it('has a required and optional type', () => {
      const optional = SchemaTypes.bool;
      const required = SchemaTypes.bool.isRequired;

      expect(optional()).toEqual({
        definition: { type: 'boolean' },
        required: false,
      });

      expect(required()).toEqual({
        definition: { type: 'boolean' },
        required: true,
      });
    });
  });

  describe('#number', () => {
    it('has a required and optional type', () => {
      const optional = SchemaTypes.number;
      const required = SchemaTypes.number.isRequired;

      expect(optional()).toEqual({
        definition: { type: 'number' },
        required: false,
      });

      expect(required()).toEqual({
        definition: { type: 'number' },
        required: true,
      });
    });
  });

  describe('#string', () => {
    it('has a required and optional type', () => {
      const optional = SchemaTypes.string;
      const required = SchemaTypes.string.isRequired;

      expect(optional()).toEqual({
        definition: { type: 'string' },
        required: false,
      });

      expect(required()).toEqual({
        definition: { type: 'string' },
        required: true,
      });
    });
  });

  describe('#listOfStrings', () => {
    it('has a required and optional type', () => {
      const optional = SchemaTypes.listOfStrings;
      const required = SchemaTypes.listOfStrings.isRequired;

      expect(optional()).toEqual({
        definition: { type: 'array', items: { type: 'string' } },
        required: false,
      });

      expect(required()).toEqual({
        definition: { type: 'array', items: { type: 'string' } },
        required: true,
      });
    });
  });

  describe('#oneOf', () => {
    it('has a required and optional type', () => {
      const VALUES = ['Value 1', 'Value 2', 3];

      const optional = SchemaTypes.oneOf(VALUES);
      const required = SchemaTypes.oneOf(VALUES).isRequired;

      expect(optional()).toEqual({
        definition: { enum: VALUES },
        required: false,
      });

      expect(required()).toEqual({
        definition: { enum: VALUES },
        required: true,
      });
    });
  });

  describe('#oneOfType', () => {
    const TYPES = [SchemaTypes.bool, SchemaTypes.number];

    it('has a required and optional type', () => {
      const optional = SchemaTypes.oneOfType(TYPES);
      const required = SchemaTypes.oneOfType(TYPES).isRequired;

      expect(optional()).toEqual({
        definition: { type: ['boolean', 'number'] },
        required: false,
      });

      expect(required()).toEqual({
        definition: { type: ['boolean', 'number'] },
        required: true,
      });
    });

    it('supports multiple schema types', () => {
      const multipleTypes = SchemaTypes.oneOfType(TYPES);

      expect(multipleTypes()).toEqual({
        definition: { type: ['boolean', 'number'] },
        required: false,
      });
    });
  });
});
