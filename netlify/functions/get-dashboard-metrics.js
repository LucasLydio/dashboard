const { getUsersCount, getActiveSessions } = require('./apiClient');
require('dotenv').config();

exports.handler = async function(event, context) {
  try {
    const usersCount = await getUsersCount();
    const activeSessions = await getActiveSessions();

    return {
      statusCode: 200,
      body: JSON.stringify({
        usersCount,
        activeSessions,
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
