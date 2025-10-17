//setChartAddress.js
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/.netlify/functions/get-addresses-metrics');

    if (!res.ok) throw new Error('Falha ao buscar métricas');
    const stateCounts = await res.json();

  const labels = Object.keys(stateCounts.data);
  const data = Object.values(stateCounts.data);
  
  const ctx = document.getElementById('states-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Usuários por Estado',
        data: data,
        backgroundColor: [
          '#006c70',
          '#f4b313',
          '#51b6b6',
          '#132540'
        ]
      }]
    },
      options: {
        plugins: {
          legend: {
            display: false,
            position: 'top'
          }
        },
        scales: {
            y: { beginAtZero: true }
        }
      }
    });

  } catch (err) {
    console.error('Erro ao carregar dados:', err);
  }
});