
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/.netlify/functions/get-chart-metrics');

    if (!res.ok) throw new Error('Falha ao buscar métricas');
    const data = await res.json();

  const usuariosProfile1 = data.profile_1; 
  const usuariosProfile2 = data.profile_2;  

  if (usuariosProfile1 === 0 && usuariosProfile2 === 0) {
    document.getElementById('no-sessions').classList.remove('d-none');
    document.getElementById('users-profile-chart').style.display = 'none';
  } else {
    const ctx = document.getElementById('users-profile-chart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Clientes', 'Terapeutas'],
        datasets: [{
          data: [usuariosProfile1, usuariosProfile2],
          backgroundColor: [
            '#006c70', // cor do perfil 1
            '#f4b313', // cor do perfil 2
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });
  }

  } catch (err) {
    console.error('Erro ao carregar dados:', err);
  }
});