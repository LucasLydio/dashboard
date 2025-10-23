//setChartAddress.js
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/.netlify/functions/get-addresses-metrics');

    if (!res.ok) throw new Error('Falha ao buscar métricas');
    const stateCounts = await res.json();

  const labels = Object.keys(stateCounts.data);
  const data = Object.values(stateCounts.data);

  const stateColors = [
    "#006c70", // MindWay
    "#f4b313", // MindWay
    "#51b6b6", // MindWay
    "#132540", // MindWay
    "#27ae60", // verde
    "#665c84", // roxo escuro
    "#7b42f6", // roxo
    "#ff5a36", // vibrante
    "#e479bd", // suave
    "#f7c873", // amarelo claro
    "#b4bbc8", // cinza claro
    "#fd8451", // laranja
    "#7ec4cf", // azul claro
    "#e26a6a", // vermelho rosado
    "#2dca8c", // verde escuro
    "#b3863d", // mostarda
    "#ffb4a2", // pêssego
    "#ba68c8", // lilás
    "#a3cbf0", // azul pastel
    "#fe6e9e", // rosa chiclete
    "#00b894", // verde água
    "#6c757d", // MindWay muted
    "#ffda77", // amarelo pastel
    "#d7e3fc", // azul super claro
    "#ff5858", // vermelho puro
    "#a5d8ff", // azul gelo
    "#ffcf56"  // amarelo vibrante
  ];

  
  const ctx = document.getElementById('states-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Usuários por Estado',
        data: data,
        backgroundColor: stateColors
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