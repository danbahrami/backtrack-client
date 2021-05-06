export default function createClient(options = {}) {
  const { url, headers, onSuccess, onError } = options;

  if (!url) {
    throw new Error('You must provide a URL when creating a Backtrack client');
  }

  return {
    trackEvent: () => {},
  };
}
