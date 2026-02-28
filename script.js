// Fechar o Modal inicial
function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Relógio e Data em tempo real
function updateDateTime() {
    const now = new Date();
    const data = now.toLocaleDateString('pt-BR');
    const hora = now.toLocaleTimeString('pt-BR', { hour12: false });
    
    document.getElementById('live-info').innerHTML = 
        `📅 ${data} - ⏰ ${hora} - 🌎 Guarulhos - SP `;
}

// Alternar entre abas (VR / HE)
function showTab(tabId) {
    document.querySelectorAll('.calc-card').forEach(card => card.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Cálculo Vale Refeição
function calcVR() {
    const dias = document.getElementById('dias-vr').value || 0;
    const total = dias * 17.12;
    document.getElementById('res-vr').innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Cálculo Horas Extras
function calcHE() {
    const h50 = document.getElementById('qtd-50').value || 0;
    const h80 = document.getElementById('qtd-80').value || 0;
    const totalHE = (h50 * 16.76) + (h80 * 20.11);
    const dsr = totalHE * 0.25;
    const totalGeral = totalHE + dsr;

    // Atualiza os valores na tela
    document.getElementById('res-he').innerText = totalHE.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('res-dsr').innerText = dsr.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('res-total-geral').innerText = totalGeral.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
// Inicialização
setInterval(updateDateTime, 1000);
updateDateTime();