import defineEvent from './define-event';
import schemaTypes from '../schema-types';

describe('defineEvent', () => {
  it('throws an error when no name argument is provided', () => {
    expect(() => defineEvent()).toThrow();
  });

  it('returns an event factory function', () => {
    const buttonClicked = defineEvent('Button clicked');

    expect(typeof buttonClicked).toBe('function');
  });

  describe('the returned event factory function', () => {
    const SCHEMA = { location: schemaTypes.string };
    const PROPERTIES = { lodation: 'Masthead' };

    it('returns an event object that includes the event name, schema and event properties', () => {
      const buttonClicked = defineEvent('Button clicked', SCHEMA);
      const event = buttonClicked(PROPERTIES);

      expect(event).toEqual({
        name: 'Button clicked',
        properties: PROPERTIES,
        schema: SCHEMA,
      });
    });
  });
});
