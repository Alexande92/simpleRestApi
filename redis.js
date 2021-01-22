const redis = require('redis')
const { promisify } = require("util");

/* Data for redis connection, set by default as localhost, port 6379
*  To change connections just set client like this
*   redis.createClient({
*     host: 'your_host',
*     port: 'your_port'
*   })
*/

const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

module.exports = {
  getAsync,
  setAsync
}
