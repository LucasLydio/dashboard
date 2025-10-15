// js/apiClient.js
// CommonJS: para rodar em funções serverless (Netlify), NÃO no navegador direto!
// Não coloque este arquivo para ser chamado no front — use para backend/serverless!

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL; 
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function getUsersCount() {
  const { count, error } = await supabase
    .from('users')
    .select('*', { count: 'exact', head: true });
  if (error) throw error;
  return count;
}

async function getActiveSessions() {
  const { data, error } = await supabase
    .from('sessions')
    .select('id')
    .eq('session_status', 'success');
  if (error) throw error;
  return data.length;
}

async function getSocialNetwork() {
  const { count, error } = await supabase
    .from('social_network')
    .select('*', { count: 'exact', head: true });
  if (error) throw error;
  return count;
}

module.exports = {
  supabase,
  getUsersCount,
  getActiveSessions,
  getSocialNetwork
};
