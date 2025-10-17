// js/setMessages.js
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/.netlify/functions/get-messages-metrics');

    if (!res.ok) throw new Error('Falha ao buscar métricas');
    const data = await res.json();

    document.getElementById('messages-success').textContent = data.messages ?? '--';

  } catch (err) {
    console.error('Erro ao carregar dados:', err);
  }
});
