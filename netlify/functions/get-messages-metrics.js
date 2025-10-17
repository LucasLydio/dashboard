// get-chart-metrics.js

const { getMessagesCount } = require('./apiClient');
require('dotenv').config();

exports.handler = async function(event, context) {
  try {
    const messages = await getMessagesCount();

    return {
      statusCode: 200,
      body: JSON.stringify({
        messages
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
