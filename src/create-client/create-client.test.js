import fetchMock from 'jest-fetch-mock';
import createClient from './create-client';
import defineEvent from '../define-event';
import SchemaTypes from '../schema-types';

const loggedIn = defineEvent('Logged in', {
  userID: SchemaTypes.number.isRequired,
});

describe('createClient', () => {
  beforeEach(() => {
    fetchMock.enableMocks();
  });

  it('returns a client with a trackEvent method', () => {
    const client = createClient({
      uri: 'http://www.backtrack.com/event',
    });

    expect(typeof client).toBe('object');
    expect(typeof client.trackEvent).toBe('function');
  });

  describe('when no URI option is passed', () => {
    it('throws an error', () => {
      expect(() => createClient({})).toThrow();
    });
  });

  describe('client.trackEvent', () => {
    it('makes a fetch request to the client URI', () => {
      const client = createClient({
        uri: 'http://www.backtrack.com/event',
      });
      const event = loggedIn({
        userID: 44,
      });

      client.trackEvent(event);

      expect(fetch).toHaveBeenCalledWith('http://www.backtrack.com/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    });
  });
});
