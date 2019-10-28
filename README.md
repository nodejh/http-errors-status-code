# HTTP Error Status Code

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/http-errors-status-code.svg?style=flat-square
[npm-url]: https://npmjs.org/package/http-errors-status-code
[travis-image]: https://img.shields.io/travis/nodejh/http-errors-status-code.svg?style=flat-square
[travis-url]: https://travis-ci.org/nodejh/http-errors-status-code
[codecov-image]: https://img.shields.io/codecov/c/github/nodejh/http-errors-status-code.svg?style=flat-square
[codecov-url]: https://codecov.io/github/nodejh/http-errors-status-code?branch=master
[david-image]: https://img.shields.io/david/nodejh/http-errors-status-code.svg?style=flat-square
[david-url]: https://david-dm.org/nodejh/http-errors-status-code
[snyk-image]: https://snyk.io/test/npm/http-errors-status-code/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/http-errors-status-code
[download-image]: https://img.shields.io/npm/dm/http-errors-status-code.svg?style=flat-square
[download-url]: https://npmjs.org/package/http-errors-status-code

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
