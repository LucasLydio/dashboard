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

async function getMessagesCount() {
  const { count, error } = await supabase
    .from('messages')
    .select('*', { count: 'exact', head: true });
  if (error) throw error;
  return count;
}

async function getUsersCountByProfile(profile_id) {
  const { count, error } = await supabase
    .from('users')
    .select('*', { count: 'exact', head: true })
    .eq('profile_id', profile_id);
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

async function getAddresses() {
  const { data, error } = await supabase
    .from('addresses')
    .select('city, state');
  if (error) throw error;
  return data; // [{ city: 'Goiânia', state: 'Goiás' }, ...]
}

async function getStateCounts() {
  const addresses = await getAddresses();
  const stateCounts = {};

  addresses.forEach(addr => {
    const state = addr.state || 'Indefinido';
    stateCounts[state] = (stateCounts[state] || 0) + 1;
  });

  return stateCounts;
}

async function getTherapist() {
  const { data, error } = await supabase
    .from('users')
    .select('name, surname, email')
    .eq('profile_id', 3);
  if (error) throw error;
  return data;
}


module.exports = {
  supabase,
  getUsersCount,
  getActiveSessions,
  getSocialNetwork,
  getUsersCountByProfile,
  getMessagesCount,
  getAddresses,
  getStateCounts,
  getTherapist
};
