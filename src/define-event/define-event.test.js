import defineEvent from './define-event';
import schemaTypes from '../schema-types';

describe('defineEvent', () => {
  it('returns an event factory function', () => {
    const buttonClicked = defineEvent('Button clicked');

    expect(typeof buttonClicked).toBe('function');
  });

  describe('the returned event factory function', () => {
    const SCHEMA = {
      location: schemaTypes.string,
      userID: schemaTypes.number.isRequired,
      isUserInTrial: schemaTypes.bool.isRequired,
    };
    const PROPERTIES = {
      location: 'Masthead',
      userID: 44,
      isUserInTrial: false,
    };

    it('returns an event object that includes the event name, schema and event properties', () => {
      const buttonClicked = defineEvent('Button clicked', SCHEMA);
      const event = buttonClicked(PROPERTIES);

      expect(event).toEqual({
        name: 'Button clicked',
        properties: PROPERTIES,
        schema: expect.any(Object),
      });
    });

    it('converts the schemaTypes definition into a JSON Schema format', () => {
      const buttonClicked = defineEvent('Button clicked', SCHEMA);
      const event = buttonClicked(PROPERTIES);

      expect(event.schema).toEqual({
        type: 'object',
        required: ['userID', 'isUserInTrial'],
        properties: {
          location: { type: 'string' },
          userID: { type: 'number' },
          isUserInTrial: { type: 'boolean' },
        },
      });
    });
  });

  describe('when an event is defined with no name', () => {
    it('throws an error', () => {
      expect(() => defineEvent()).toThrow();
    });
  });

  describe('when an event is defined with no schema', () => {
    it('creates an event with an empty JSON schema', () => {
      const buttonClicked = defineEvent('Button clicked');
      const event = buttonClicked();

      expect(event.schema).toEqual({
        type: 'object',
        required: [],
        properties: {},
      });
    });
  });

  describe('when the event factory is called with no properties', () => {
    it('creates an event with an empty properties object', () => {
      const buttonClicked = defineEvent('Button clicked', {
        location: schemaTypes.string,
      });

      const event = buttonClicked();

      expect(event).toEqual({
        name: 'Button clicked',
        properties: {},
        schema: expect.any(Object),
      });
    });
  });
});
