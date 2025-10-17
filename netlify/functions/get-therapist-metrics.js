// get-therapist-metrics.js

const { getTherapist } = require('./apiClient');
require('dotenv').config();

exports.handler = async function(event, context) {
  try {
    const data = await getTherapist();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data
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
