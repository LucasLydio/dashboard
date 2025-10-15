const { getSocialNetwork } = require('./apiClient');
require('dotenv').config();

exports.handler = async function(event, context) {
  try {
    const social = await getSocialNetwork();

    return {
      statusCode: 200,
      body: JSON.stringify({
        social
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
