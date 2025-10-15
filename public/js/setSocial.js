// js/setUser.js
window.addEventListener('DOMContentLoaded', async () => {
  try {
    // Chama sua função serverless (backend) que retorna as métricas
    const res = await fetch('/.netlify/functions/get-social-metrics');

    if (!res.ok) throw new Error('Falha ao buscar métricas');
    const data = await res.json();

    // Redes de Apoio
    document.getElementById('social-network').textContent = data.social ?? '--';

  } catch (err) {
    console.error('Erro ao carregar dados:', err);
  }
});
