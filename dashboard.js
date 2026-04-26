// ==================== DATA ====================
let DATA = {};

async function loadData() {
  const resp = await fetch('dashboard_data.json');
  DATA = await resp.json();
  initKPIs();
  initOverviewCharts();
  initDealerTables();
}

// ==================== CHART DEFAULTS ====================
Chart.defaults.color = '#94a3b8';
Chart.defaults.font.family = "'Inter',system-ui,sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyleWidth = 8;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(17,24,39,.95)';
Chart.defaults.plugins.tooltip.borderColor = 'rgba(59,130,246,.3)';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.elements.bar.borderRadius = 6;

const charts = {};

// ==================== NAVIGATION ====================
function switchSection(id, el) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  if (el) el.classList.add('active');
  const titles = {overview:'Dashboard Overview',dealers:'Dealer Performance',stock:'Stock Management',dispatch:'Dispatch Log',monthly:'Monthly Confirmation Report',details:'Detailed Dealer Wise Report',reconciliation:'Reconciliation'};
  document.getElementById('sectionTitle').textContent = titles[id] || id;
  document.getElementById('sidebar').classList.remove('open');
  if (id === 'stock') initStockCharts();
  if (id === 'dispatch') initDispatchCharts();
  if (id === 'monthly') initMonthlyReport();
  if (id === 'details') initDetailedReport();
  if (id === 'reconciliation') initReconciliationCharts();
}

// ==================== KPI ====================
function initKPIs() {
  document.getElementById('kpiGodownSale').textContent = DATA.grandTotals.godownTotal.toLocaleString();
  document.getElementById('kpiSAPSaleVal').textContent = DATA.grandTotals.sapTotal.toLocaleString();
  document.getElementById('kpiClosingVal').textContent = DATA.grandTotals.closingTotal.toLocaleString();
  const latest = DATA.stock[DATA.stock.length - 1];
  document.getElementById('kpiMTVal').textContent = latest.totalMT;
  document.getElementById('kpiMissingShipToVal').textContent = DATA.missingShipTo || 0;
}

// ==================== OVERVIEW CHARTS ====================
function initOverviewCharts() {
  const stockDates = DATA.stock.map(s => {const d = new Date(s.date); return d.getDate() + ' Apr';});
  const stockVals = DATA.stock.map(s => s.totalPPCY);
  charts.stockTrend = new Chart(document.getElementById('chartStockTrend'), {
    type: 'line',
    data: {
      labels: stockDates,
      datasets: [{
        label: 'PPCY Stock (MT)',
        data: stockVals.map(v => v/20),
        borderColor: '#3b82f6',
        backgroundColor: createGradient('chartStockTrend', '#3b82f6'),
        fill: true, tension: 0.4, pointRadius: 2, pointHoverRadius: 6,
        pointBackgroundColor: '#3b82f6', borderWidth: 2.5
      }]
    },
    options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:'rgba(30,41,59,.4)'}},y:{grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true}}}
  });

  const gt = DATA.grandTotals;
  charts.productMix = new Chart(document.getElementById('chartProductMix'), {
    type: 'doughnut',
    data: {
      labels: ['PPCY', 'Plus', 'Kawach'],
      datasets: [{
        data: [gt.godownPPCY, gt.godownPlus, gt.godownKaw || 0.1],
        backgroundColor: ['#3b82f6','#8b5cf6','#f59e0b'],
        borderColor: '#111827', borderWidth: 3, hoverOffset: 8
      }]
    },
    options: {responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'bottom',labels:{padding:14,font:{size:11}}}}}
  });

  charts.cfaDispatch = new Chart(document.getElementById('chartCFADispatch'), {
    type: 'bar',
    data: {
      labels: ['CFA-1', 'CFA-2'],
      datasets: [
        {label:'Godown Sale',data:[DATA.cfa1Totals.godownTotal, DATA.cfa2Totals.godownTotal],backgroundColor:'#3b82f6'},
        {label:'SAP Sale',data:[DATA.cfa1Totals.sapTotal, DATA.cfa2Totals.sapTotal],backgroundColor:'#8b5cf6'},
        {label:'Closing Stock',data:[DATA.cfa1Totals.closingTotal, DATA.cfa2Totals.closingTotal],backgroundColor:'#f59e0b'}
      ]
    },
    options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{padding:12}}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true}}}
  });

  const dealers = DATA.monthlyReport.slice().sort((a,b) => b.godownTotal - a.godownTotal).slice(0, 8);
  charts.dealerSales = new Chart(document.getElementById('chartDealerSales'), {
    type: 'bar',
    data: {
      labels: dealers.map(d => d.name),
      datasets: [{label:'Total MT',data:dealers.map(d => d.godownTotal),backgroundColor:['#3b82f6','#8b5cf6'],borderRadius:8,barPercentage:0.5}]
    },
    options: {indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true},y:{grid:{display:false}}}}
  });
}

function createGradient(canvasId, color) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 280);
  g.addColorStop(0, color + '30');
  g.addColorStop(1, color + '00');
  return g;
}

// ==================== DEALER TABLES ====================
function initDealerTables() {
  const cfa1 = DATA.monthlyReport.filter(d => d.cfa === 'CFA-1');
  const cfa2 = DATA.monthlyReport.filter(d => d.cfa === 'CFA-2');
  buildDealerTable('tableCFA1', cfa1, DATA.cfa1Totals);
  buildDealerTable('tableCFA2', cfa2, DATA.cfa2Totals);
}

function buildDealerTable(id, dealers, totals) {
  const t = document.getElementById(id);
  t.innerHTML = `<thead><tr><th>#</th><th>Dealer Name</th><th>Godown (MT)</th><th>SAP (MT)</th><th>PPCY</th><th>Kawach</th><th>Plus</th><th>Closing Total</th></tr></thead><tbody></tbody>`;
  const tbody = t.querySelector('tbody');
  dealers.forEach((d, i) => {
    const cls = d.closingTotal > 0 ? 'positive' : d.closingTotal < 0 ? 'negative' : '';
    tbody.innerHTML += `<tr><td>${i+1}</td><td class="dealer-name">${d.name}</td><td>${d.godownTotal}</td><td>${d.sapConfirmed}</td><td>${d.ppcy}</td><td>${d.kawach}</td><td>${d.plus}</td><td class="${cls}">${d.closingTotal}</td></tr>`;
  });
  tbody.innerHTML += `<tr class="total-row"><td></td><td class="dealer-name">TOTAL</td><td>${totals.godownTotal}</td><td>${totals.sapTotal}</td><td>—</td><td>—</td><td>—</td><td>${totals.closingTotal}</td></tr>`;
}

// ==================== MONTHLY REPORT ====================
function initMonthlyReport() {
  const t = document.getElementById('tableMonthlyReport');
  if (t.querySelector('thead')) return;
  t.innerHTML = `<thead><tr><th>Dealer Name</th><th>CFA</th><th>Godown Sale</th><th>Confirmed (SAP)</th><th>Received Status</th><th>PPCY</th><th>Kawach</th><th>Plus</th></tr></thead><tbody></tbody>`;
  const tbody = t.querySelector('tbody');
  DATA.monthlyReport.forEach(d => {
    const status = d.sapConfirmed > 0 ? '<span class="badge badge-green">Confirmed</span>' : '<span class="badge badge-purple">Pending</span>';
    tbody.innerHTML += `<tr><td class="dealer-name">${d.name}</td><td>${d.cfa}</td><td>${d.godownTotal} MT</td><td style="color:var(--accent-green);font-weight:700">${d.sapConfirmed} MT</td><td>${status}</td><td>${d.ppcy}</td><td>${d.kawach}</td><td>${d.plus}</td></tr>`;
  });

  if (!charts.monthlyConf) {
    charts.monthlyConf = new Chart(document.getElementById('chartMonthlyConfirmation'), {
      type: 'bar',
      data: {
        labels: DATA.monthlyReport.map(d => d.name),
        datasets: [
          {label:'Godown Sale',data:DATA.monthlyReport.map(d=>d.godownTotal),backgroundColor:'#3b82f6'},
          {label:'Confirmed (SAP)',data:DATA.monthlyReport.map(d=>d.sapConfirmed),backgroundColor:'#10b981'}
        ]
      },
      options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true}}}
    });
  }
}

// ==================== DETAILED REPORT ====================
function initDetailedReport() {
  renderDetailTable(DATA.sales);
}

function renderDetailTable(data) {
  const tbody = document.getElementById('tbodyDetailedSales');
  tbody.innerHTML = '';
  data.forEach(s => {
    const d = new Date(s.date);
    const dateStr = isNaN(d.getTime()) ? s.date : d.getDate() + '-' + d.toLocaleString('en',{month:'short'});
    const shipTo = s.shipTo || '<span class="text-dim">NOT SPECIFIED</span>';
    tbody.innerHTML += `<tr>
      <td>${dateStr}</td>
      <td class="dealer-name">${s.dealer}</td>
      <td style="font-weight:700;color:var(--accent-blue)">${shipTo}</td>
      <td>${s.address}</td>
      <td>${(s.saleSada/20).toFixed(1)}</td>
      <td>${(s.salePlus/20).toFixed(1)}</td>
      <td style="font-weight:700;color:var(--accent-green)">${(s.total/20).toFixed(1)}</td>
      <td>${s.truckNo}</td>
      <td>${s.freight}</td>
    </tr>`;
  });
}

function filterDetailTable() {
  const q = document.getElementById('detailSearch').value.toLowerCase();
  const filtered = DATA.sales.filter(s => 
    s.dealer.toLowerCase().includes(q) || 
    s.shipTo.toLowerCase().includes(q) || 
    s.address.toLowerCase().includes(q)
  );
  renderDetailTable(filtered);
}

// ==================== STOCK SECTION ====================
function initStockCharts() {
  if (charts.dailyStock) return;
  const dates = DATA.stock.map(s => {const d = new Date(s.date); return d.getDate() + ' Apr';});
  charts.dailyStock = new Chart(document.getElementById('chartDailyStock'), {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [{label:'MT Stock',data:DATA.stock.map(s=>s.totalMT),backgroundColor:'rgba(59,130,246,.6)',borderRadius:4,barPercentage:.6}]
    },
    options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true}}}
  });

  charts.stockComp = new Chart(document.getElementById('chartStockComposition'), {
    type: 'polarArea',
    data: {
      labels: ['PPCY','Plus','Kawach'],
      datasets: [{data:[DATA.godownStock.PPCY/20,DATA.godownStock.PLUS/20,DATA.godownStock.KAW/20||1],backgroundColor:['rgba(59,130,246,.7)','rgba(139,92,246,.7)','rgba(245,158,11,.7)'],borderColor:'#111827',borderWidth:2}]
    },
    options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{padding:10}}}}
  });

  fillStockItems('godownStockItems', DATA.godownStock, 'var(--accent-blue)');
  fillStockItems('sapStockItems', DATA.sapStock, 'var(--accent-green)');
  fillStockItems('diffStockItems', DATA.stockDifference, 'var(--accent-amber)', true);
}

function fillStockItems(id, data, color, isDiff) {
  const el = document.getElementById(id);
  el.innerHTML = '';
  ['PPCY','KAW','PLUS','CT','total'].forEach(k => {
    const v = data[k];
    let cls = '';
    if (isDiff) cls = v < 0 ? 'negative' : v > 0 ? 'positive' : '';
    const mtVal = (v/20).toFixed(2);
    el.innerHTML += `<div class="stock-item"><span class="stock-item-label">${k === 'total' ? 'TOTAL' : k}</span><span class="stock-item-value ${cls}">${mtVal} MT</span></div>`;
  });
}

// ==================== DISPATCH SECTION ====================
function initDispatchCharts() {
  const t = document.getElementById('tableDispatch');
  if (t.querySelector('thead')) return;
  t.innerHTML = `<thead><tr><th>Date</th><th>Dealer</th><th>Address</th><th>Sada (MT)</th><th>Plus (MT)</th><th>Total (MT)</th><th>Truck No.</th></tr></thead><tbody></tbody>`;
  const tbody = t.querySelector('tbody');
  DATA.sales.forEach(s => {
    const d = new Date(s.date);
    const dateStr = isNaN(d.getTime()) ? s.date : d.getDate() + '-' + d.toLocaleString('en',{month:'short'});
    tbody.innerHTML += `<tr><td>${dateStr}</td><td class="dealer-name">${s.dealer}</td><td>${s.address}</td><td>${(s.saleSada/20).toFixed(1)}</td><td>${(s.salePlus/20).toFixed(1)}</td><td style="font-weight:700;color:var(--accent-blue)">${(s.total/20).toFixed(1)}</td><td>${s.truckNo}</td></tr>`;
  });

  if (!charts.dispatchTimeline) {
    charts.dispatchTimeline = new Chart(document.getElementById('chartDispatchTimeline'), {
      type: 'bar',
      data: {
        labels: DATA.sales.map(s => {const d=new Date(s.date);return isNaN(d.getTime()) ? s.date : d.getDate()+' Apr'}),
        datasets: [
          {label:'Sada',data:DATA.sales.map(s=>s.saleSada/20),backgroundColor:'#3b82f6',stack:'s'},
          {label:'Plus',data:DATA.sales.map(s=>s.salePlus/20),backgroundColor:'#8b5cf6',stack:'s'}
        ]
      },
      options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}},scales:{x:{stacked:true,grid:{display:false}},y:{stacked:true,grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true}}}
    });
  }
}

// ==================== RECONCILIATION ====================
function initReconciliationCharts() {
  if (charts.recon) return;
  charts.recon = new Chart(document.getElementById('chartReconciliation'), {
    type: 'bar',
    data: {
      labels: ['PPCY','Kawach','Plus','Total'],
      datasets: [
        {label:'Godown Sale',data:[DATA.grandTotals.godownPPCY,DATA.grandTotals.godownKaw,DATA.grandTotals.godownPlus,DATA.grandTotals.godownTotal],backgroundColor:'#3b82f6'},
        {label:'SAP Sale',data:[DATA.grandTotals.sapPPCY,DATA.grandTotals.sapKaw,DATA.grandTotals.sapPlus,DATA.grandTotals.sapTotal],backgroundColor:'#8b5cf6'}
      ]
    },
    options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true}}}
  });

  charts.closingProd = new Chart(document.getElementById('chartClosingProduct'), {
    type: 'doughnut',
    data: {
      labels:['PPCY','Plus','Kawach'],
      datasets:[{data:[DATA.grandTotals.closingPPCY,DATA.grandTotals.closingPlus,DATA.grandTotals.closingKaw||0.1],backgroundColor:['#3b82f6','#8b5cf6','#f59e0b'],borderColor:'#111827',borderWidth:3}]
    },
    options: {responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{position:'bottom'}}}
  });

  const t = document.getElementById('tableGrandTotals');
  t.innerHTML = `<thead><tr><th>Category (MT)</th><th>PPCY</th><th>Kawach</th><th>Plus</th><th>Total</th></tr></thead><tbody>
    <tr><td class="dealer-name">Godown Sale</td><td>${DATA.grandTotals.godownPPCY}</td><td>${DATA.grandTotals.godownKaw}</td><td>${DATA.grandTotals.godownPlus}</td><td style="font-weight:700;color:var(--accent-blue)">${DATA.grandTotals.godownTotal}</td></tr>
    <tr><td class="dealer-name">SAP Sale</td><td>${DATA.grandTotals.sapPPCY}</td><td>${DATA.grandTotals.sapKaw}</td><td>${DATA.grandTotals.sapPlus}</td><td style="font-weight:700;color:var(--accent-purple)">${DATA.grandTotals.sapTotal}</td></tr>
    <tr class="total-row"><td class="dealer-name">Closing Stock</td><td>${DATA.grandTotals.closingPPCY}</td><td>${DATA.grandTotals.closingKaw}</td><td>${DATA.grandTotals.closingPlus}</td><td>${DATA.grandTotals.closingTotal}</td></tr>
  </tbody>`;
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  loadData();
});
