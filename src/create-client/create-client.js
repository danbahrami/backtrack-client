function trackEvent(event, clientOptions) {
  const { uri, headers = {}, requestOptions = {} } = clientOptions;

  const request = fetch(uri, {
    ...requestOptions,
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });

  return request;
}

export default function createClient(options = {}) {
  if (!options.uri) {
    throw new Error('You must provide a URI when creating a Backtrack client');
  }

  return {
    trackEvent: event => trackEvent(event, options),
  };
}
