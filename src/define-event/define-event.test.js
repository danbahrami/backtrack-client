import defineEvent from './define-event';

describe('defineEvent', () => {
  it('throws an error when no name argument is provided', () => {
    expect(() => defineEvent()).toThrow();
  });

  it('returns an event factory function', () => {
    const buttonClicked = defineEvent('Button clicked');

    expect(typeof buttonClicked).toBe('function');
  });

  describe('the returned event factory function', () => {
    it('returns an event object that includes the event name', () => {
      const buttonClicked = defineEvent('Button clicked');
      const event = buttonClicked();

      expect(event.name).toBe('Button clicked');
    });
  });
});
