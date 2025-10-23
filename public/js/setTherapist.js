//setTherapist.js
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/.netlify/functions/get-therapist-metrics');

    if (!res.ok) throw new Error('Falha ao buscar métricas');
    const data = await res.json();

    const therapists = data;

 const container = document.getElementById('therapists-list');
  if (therapists.data.length === 0) {
    container.innerHTML = `<div class="col-12 text-center small-muted py-3">Nenhum terapeuta cadastrado</div>`;
  } else {
    therapists.data.forEach(t => {
      // Usei o ui-avatars.com para avatar automático pelas iniciais do nome
      const card = `
        <div class="col-12 col-md-6 col-lg-4 mb-3">
          <div class="card shadow-sm h-100">
            <div class="card-body text-center">
              <div class="mb-2">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(t.name + ' ' + (t.surname || ''))}&size=64&background=006c70&color=fff" 
                  class="rounded-circle" width="60" height="60" alt="Avatar">
              </div>
              <h5 class="card-title mb-1">${t.name} ${t.surname || ''}</h5>
              <div class="small muted-desc mb-2">${t.email ? `E-mail: ${t.email}` : ''}</div>
              <small class="text-muted" >Horas ativas no sistema(média): 5h</small>
              <!-- Outros campos se quiser -->
            </div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', card);
    });
  }

  } catch (err) {
    console.error('Erro ao carregar dados:', err);
  }
});