// js/setUser.js
window.addEventListener('DOMContentLoaded', async () => {
  try {
    // Chama sua função serverless (backend) que retorna as métricas
    const res = await fetch('/.netlify/functions/get-dashboard-metrics');

    if (!res.ok) throw new Error('Falha ao buscar métricas');
    const data = await res.json();

    // Usuários
    document.getElementById('users-count').textContent = data.usersCount ?? '--';

    // Sessões ativas
    document.getElementById('active-sessions').textContent = data.activeSessions ?? '--';

    // Repita para outras métricas, se retornar do endpoint
    // Exemplo: document.getElementById('messages-success').textContent = data.messagesSuccess ?? '--';

  } catch (err) {
    console.error('Erro ao carregar dados:', err);
  }
});
