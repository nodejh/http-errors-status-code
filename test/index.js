const assert = require('assert');
const httpErrorsStatusCode = require('../');


assert.equal(httpErrorsStatusCode.getStatusCode('BadRequest'), 400)



