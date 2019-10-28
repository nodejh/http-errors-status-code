# HTTP Error Status Code

## Usage

Install:

```sh
$ npm i http-errors-status-code --save
```

Use:

```js
const { getStatusName, getStatusCode } = require('http-errors-status-code');

getStatusName(400); // BadRequest
getStatusCode('BadRequest'); // 400
```

## API

- getStatusName(number): string
- getStatusCode(string): number
