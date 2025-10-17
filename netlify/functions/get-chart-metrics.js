// get-chart-metrics.js

const { getUsersCountByProfile } = require('./apiClient');
require('dotenv').config();

exports.handler = async function(event, context) {
  try {
    const profile_1 = await getUsersCountByProfile(1);
    const profile_2 = await getUsersCountByProfile(2);

    return {
      statusCode: 200,
      body: JSON.stringify({
        profile_1,
        profile_2
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
