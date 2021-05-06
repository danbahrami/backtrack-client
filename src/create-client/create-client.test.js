import createClient from './create-client';

describe('createClient', () => {
  it('returns a client with a trackEvent method', () => {
    const client = createClient({
      url: 'http://www.backtrack.com/event',
    });

    expect(typeof client).toBe('object');
    expect(typeof client.trackEvent).toBe('function');
  });

  describe('when no URL option is passed', () => {
    it('throws an error', () => {
      expect(() => createClient({})).toThrow();
    });
  });
});
