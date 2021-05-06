# Backtrack Client

Backtrack is a framework for adding type validation to tracking events.

## Getting started

Install the client

```
yarn add backtrack-client
```

create the client

```
import * as backtrack from 'backtrack-client';

const client = backtrack.createClient({
  uri: 'http://www.my-tracking-service.com/event'
});

client.trackEvent(
  // But first we need to define an event
);
```

## Defining events

Lets create a file `./events.js`

```
// ./events.js

import { defineEvent, SchemaTypes } from 'backtrack-client';

// Lets create an event for when the user signs in

export const signIn = defineEvent('sign_in', {
  userID: SchemaTypes.string.isRequired,
  userIsTrialist: SchemaTypes.bool.isRequired,
  subscription: SchemaTypes.oneOf(['bronze', 'silver', 'gold'])
});
```

To be continued...
