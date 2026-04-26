// ==================== DATA ====================
const DATA = {
  sales: [
    {date:'2026-04-04',dealer:'JAI SHRI KRISHNA AND SONS',shipTo:'',address:'SIDDIQPUR',saleSada:300,salePlus:0,saleKaw:0,saleCT:0,total:300,truckNo:'A/F',freight:'SELF'},
    {date:'2026-04-08',dealer:'J.P. AND SONS',shipTo:'ANSH',address:'GAURABADSHAHPUR',saleSada:0,salePlus:840,saleKaw:0,saleCT:0,total:840,truckNo:'UP32SN5665',freight:'SELF'},
    {date:'2026-04-15',dealer:'JAI SHRI KRISHNA AND SONS',shipTo:'',address:'SIDDIQPUR',saleSada:640,salePlus:0,saleKaw:0,saleCT:0,total:640,truckNo:'BR02GD5158',freight:'SELF'},
    {date:'2026-04-16',dealer:'J.P. AND SONS',shipTo:'',address:'KESHAVPUR',saleSada:0,salePlus:840,saleKaw:0,saleCT:0,total:840,truckNo:'UP32SN9486',freight:'SELF'},
    {date:'2026-04-17',dealer:'JAI SHRI KRISHNA AND SONS',shipTo:'',address:'SIDDIQPUR',saleSada:560,salePlus:0,saleKaw:0,saleCT:0,total:560,truckNo:'A/F',freight:'SELF'},
    {date:'2026-04-24',dealer:'JAI SHRI KRISHNA AND SONS',shipTo:'',address:'SIDDIQPUR',saleSada:870,salePlus:0,saleKaw:0,saleCT:0,total:870,truckNo:'A/F',freight:'SELF'}
  ],
  stock: [
    {date:'2026-04-01',totalPPCY:1800,totalMT:90},{date:'2026-04-02',totalPPCY:1800,totalMT:90},
    {date:'2026-04-03',totalPPCY:1800,totalMT:90},{date:'2026-04-04',totalPPCY:1800,totalMT:90},
    {date:'2026-04-05',totalPPCY:1500,totalMT:75},{date:'2026-04-06',totalPPCY:1500,totalMT:75},
    {date:'2026-04-07',totalPPCY:1500,totalMT:75},{date:'2026-04-08',totalPPCY:1500,totalMT:75},
    {date:'2026-04-09',totalPPCY:1500,totalMT:75},{date:'2026-04-10',totalPPCY:1500,totalMT:75},
    {date:'2026-04-11',totalPPCY:1500,totalMT:75},{date:'2026-04-12',totalPPCY:1500,totalMT:75},
    {date:'2026-04-13',totalPPCY:1500,totalMT:75},{date:'2026-04-14',totalPPCY:1500,totalMT:75},
    {date:'2026-04-15',totalPPCY:1500,totalMT:75},{date:'2026-04-16',totalPPCY:1500,totalMT:75},
    {date:'2026-04-17',totalPPCY:1500,totalMT:75},{date:'2026-04-18',totalPPCY:940,totalMT:47},
    {date:'2026-04-19',totalPPCY:940,totalMT:47},{date:'2026-04-20',totalPPCY:940,totalMT:47},
    {date:'2026-04-21',totalPPCY:940,totalMT:47},{date:'2026-04-22',totalPPCY:940,totalMT:47},
    {date:'2026-04-23',totalPPCY:940,totalMT:47},{date:'2026-04-24',totalPPCY:940,totalMT:47},
    {date:'2026-04-25',totalPPCY:70,totalMT:3.5}
  ],
  cfa1Dealers: [
    {name:'AL AMEEN INTER.',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:3,sapKaw:0,sapPlus:0,sapTotal:3,closingPPCY:0,closingKaw:0,closingPlus:1.75,closingTotal:1.75},
    {name:'BAJRANG B/M',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:25,sapKaw:0,sapPlus:0,sapTotal:25,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'DURGA TRADERS',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'PRADHAN B/M',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'MAA DURGA',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'SHIV TRADING COM',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'SHREE LUXMI',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'VINDHWASANI',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'R.D ENTERPRISES',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0}
  ],
  cfa1Totals:{godownTotal:0,sapTotal:28,closingTotal:1.75},
  cfa2Dealers: [
    {name:'VATSAL ENTERPRISES',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'AJEET CT. AG.',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'MAURYA & COM.',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'JAI SHRI KRISHNA',godownPPCY:118.5,godownKaw:0,godownPlus:0,godownTotal:118.5,sapPPCY:83.5,sapKaw:0,sapPlus:0,sapTotal:83.5,closingPPCY:21,closingKaw:0,closingPlus:-1.75,closingTotal:19.25},
    {name:'J.P. SONS',godownPPCY:0,godownKaw:0,godownPlus:84,godownTotal:84,sapPPCY:0,sapKaw:0,sapPlus:71,sapTotal:71,closingPPCY:0,closingKaw:0,closingPlus:13,closingTotal:13},
    {name:'SAI ENTERPRISES',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0},
    {name:'SHANTI B/M',godownPPCY:0,godownKaw:0,godownPlus:0,godownTotal:0,sapPPCY:0,sapKaw:0,sapPlus:0,sapTotal:0,closingPPCY:0,closingKaw:0,closingPlus:0,closingTotal:0}
  ],
  cfa2Totals:{godownPPCY:118.5,godownPlus:84,godownTotal:202.5,sapPPCY:83.5,sapPlus:71,sapTotal:154.5,closingTotal:32.25},
  grandTotals:{godownPPCY:118.5,godownKaw:0,godownPlus:84,godownTotal:202.5,sapPPCY:111.5,sapKaw:0,sapPlus:71,sapTotal:182.5,closingPPCY:21,closingKaw:0,closingPlus:13,closingTotal:34},
  godownStock:{PPCY:122,KAW:0,PLUS:84,CT:0,total:206},
  sapStock:{PPCY:136,KAW:0,PLUS:84,CT:0,total:220},
  stockDifference:{PPCY:-14,KAW:0,PLUS:0,CT:0,total:-14}
};

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
  const titles = {overview:'Dashboard Overview',dealers:'Dealer Performance',stock:'Stock Management',dispatch:'Dispatch Log',reconciliation:'Reconciliation'};
  document.getElementById('sectionTitle').textContent = titles[id] || id;
  document.getElementById('sidebar').classList.remove('open');
  if (id === 'stock') initStockCharts();
  if (id === 'dispatch') initDispatchCharts();
  if (id === 'reconciliation') initReconciliationCharts();
}

// ==================== KPI ====================
function initKPIs() {
  document.getElementById('kpiGodownSale').textContent = DATA.grandTotals.godownTotal.toLocaleString();
  document.getElementById('kpiSAPSaleVal').textContent = DATA.grandTotals.sapTotal.toLocaleString();
  document.getElementById('kpiClosingVal').textContent = DATA.grandTotals.closingTotal.toLocaleString();
  const latest = DATA.stock[DATA.stock.length - 1];
  document.getElementById('kpiMTVal').textContent = latest.totalMT;
}

// ==================== OVERVIEW CHARTS ====================
function initOverviewCharts() {
  // Stock Trend
  const stockDates = DATA.stock.map(s => {const d = new Date(s.date); return d.getDate() + ' Apr';});
  const stockVals = DATA.stock.map(s => s.totalPPCY);
  charts.stockTrend = new Chart(document.getElementById('chartStockTrend'), {
    type: 'line',
    data: {
      labels: stockDates,
      datasets: [{
        label: 'PPCY Stock (Bags)',
        data: stockVals,
        borderColor: '#3b82f6',
        backgroundColor: createGradient('chartStockTrend', '#3b82f6'),
        fill: true, tension: 0.4, pointRadius: 2, pointHoverRadius: 6,
        pointBackgroundColor: '#3b82f6', borderWidth: 2.5
      }]
    },
    options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:'rgba(30,41,59,.4)'}},y:{grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true}}}
  });

  // Product Mix Doughnut
  const gt = DATA.grandTotals;
  charts.productMix = new Chart(document.getElementById('chartProductMix'), {
    type: 'doughnut',
    data: {
      labels: ['PPCY (Sada)', 'Plus', 'Kawach', 'C&T'],
      datasets: [{
        data: [gt.godownPPCY, gt.godownPlus, gt.godownKaw || 0.1, 0.1],
        backgroundColor: ['#3b82f6','#8b5cf6','#f59e0b','#10b981'],
        borderColor: '#111827', borderWidth: 3, hoverOffset: 8
      }]
    },
    options: {responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'bottom',labels:{padding:14,font:{size:11}}}}}
  });

  // CFA Dispatch Bar
  charts.cfaDispatch = new Chart(document.getElementById('chartCFADispatch'), {
    type: 'bar',
    data: {
      labels: ['CFA-1 (G-1)', 'CFA-2 (G-2)'],
      datasets: [
        {label:'Godown Sale',data:[DATA.cfa1Totals.godownTotal, DATA.cfa2Totals.godownTotal],backgroundColor:'#3b82f6'},
        {label:'SAP Sale',data:[DATA.cfa1Totals.sapTotal, DATA.cfa2Totals.sapTotal],backgroundColor:'#8b5cf6'},
        {label:'Closing Stock',data:[DATA.cfa1Totals.closingTotal, DATA.cfa2Totals.closingTotal],backgroundColor:'#f59e0b'}
      ]
    },
    options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{padding:12}}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true}}}
  });

  // Dealer Sales Bar
  const dealerMap = {};
  DATA.sales.forEach(s => { dealerMap[s.dealer] = (dealerMap[s.dealer]||0) + s.total; });
  const dealerNames = Object.keys(dealerMap);
  const dealerVals = Object.values(dealerMap);
  charts.dealerSales = new Chart(document.getElementById('chartDealerSales'), {
    type: 'bar',
    data: {
      labels: dealerNames,
      datasets: [{label:'Total Bags',data:dealerVals,backgroundColor:['#3b82f6','#8b5cf6'],borderRadius:8,barPercentage:0.5}]
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
  buildDealerTable('tableCFA1', DATA.cfa1Dealers, DATA.cfa1Totals);
  buildDealerTable('tableCFA2', DATA.cfa2Dealers, DATA.cfa2Totals);
}

function buildDealerTable(id, dealers, totals) {
  const t = document.getElementById(id);
  t.innerHTML = `<thead><tr><th>#</th><th>Dealer Name</th><th>Godown PPCY</th><th>Godown Plus</th><th>Godown Total</th><th>SAP PPCY</th><th>SAP Plus</th><th>SAP Total</th><th>Closing Total</th></tr></thead><tbody></tbody>`;
  const tbody = t.querySelector('tbody');
  dealers.forEach((d, i) => {
    const cls = d.closingTotal > 0 ? 'positive' : d.closingTotal < 0 ? 'negative' : '';
    tbody.innerHTML += `<tr><td>${i+1}</td><td class="dealer-name">${d.name}</td><td>${d.godownPPCY}</td><td>${d.godownPlus}</td><td>${d.godownTotal}</td><td>${d.sapPPCY}</td><td>${d.sapPlus}</td><td>${d.sapTotal}</td><td class="${cls}">${d.closingTotal}</td></tr>`;
  });
  tbody.innerHTML += `<tr class="total-row"><td></td><td class="dealer-name">TOTAL</td><td>${totals.godownPPCY||0}</td><td>${totals.godownPlus||0}</td><td>${totals.godownTotal}</td><td>${totals.sapPPCY||0}</td><td>${totals.sapPlus||0}</td><td>${totals.sapTotal}</td><td>${totals.closingTotal}</td></tr>`;
}

// ==================== STOCK SECTION ====================
function initStockCharts() {
  if (charts.dailyStock) return;
  const dates = DATA.stock.map(s => {const d = new Date(s.date); return d.getDate() + ' Apr';});
  charts.dailyStock = new Chart(document.getElementById('chartDailyStock'), {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [{label:'PPCY Stock',data:DATA.stock.map(s=>s.totalPPCY),backgroundColor:'rgba(59,130,246,.6)',borderRadius:4,barPercentage:.6}]
    },
    options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{grid:{color:'rgba(30,41,59,.4)'},beginAtZero:true}}}
  });

  charts.stockComp = new Chart(document.getElementById('chartStockComposition'), {
    type: 'polarArea',
    data: {
      labels: ['PPCY','Plus','Kawach','C&T'],
      datasets: [{data:[DATA.godownStock.PPCY,DATA.godownStock.PLUS,DATA.godownStock.KAW||1,DATA.godownStock.CT||1],backgroundColor:['rgba(59,130,246,.7)','rgba(139,92,246,.7)','rgba(245,158,11,.7)','rgba(16,185,129,.7)'],borderColor:'#111827',borderWidth:2}]
    },
    options: {responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{padding:10}}}}
  });

  // Stock comparison items
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
    el.innerHTML += `<div class="stock-item"><span class="stock-item-label">${k === 'total' ? 'TOTAL' : k}</span><span class="stock-item-value ${cls}">${v}</span></div>`;
  });
}

// ==================== DISPATCH SECTION ====================
function initDispatchCharts() {
  const t = document.getElementById('tableDispatch');
  if (t.querySelector('thead')) return;
  t.innerHTML = `<thead><tr><th>Date</th><th>Dealer</th><th>Ship To</th><th>Address</th><th>Sada</th><th>Plus</th><th>Total</th><th>Truck No.</th><th>Freight</th></tr></thead><tbody></tbody>`;
  const tbody = t.querySelector('tbody');
  DATA.sales.forEach(s => {
    const d = new Date(s.date);
    const dateStr = d.getDate() + '-' + d.toLocaleString('en',{month:'short'}) + '-' + d.getFullYear();
    tbody.innerHTML += `<tr><td>${dateStr}</td><td class="dealer-name">${s.dealer}</td><td>${s.shipTo||'—'}</td><td>${s.address}</td><td>${s.saleSada||'—'}</td><td>${s.salePlus||'—'}</td><td style="font-weight:700;color:var(--accent-blue)">${s.total}</td><td>${s.truckNo}</td><td>${s.freight}</td></tr>`;
  });

  if (!charts.dispatchTimeline) {
    charts.dispatchTimeline = new Chart(document.getElementById('chartDispatchTimeline'), {
      type: 'bar',
      data: {
        labels: DATA.sales.map(s => {const d=new Date(s.date);return d.getDate()+' Apr'}),
        datasets: [
          {label:'Sada',data:DATA.sales.map(s=>s.saleSada),backgroundColor:'#3b82f6',stack:'s'},
          {label:'Plus',data:DATA.sales.map(s=>s.salePlus),backgroundColor:'#8b5cf6',stack:'s'}
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

  // Grand totals table
  const t = document.getElementById('tableGrandTotals');
  t.innerHTML = `<thead><tr><th>Category</th><th>PPCY</th><th>Kawach</th><th>Plus</th><th>Total</th></tr></thead><tbody>
    <tr><td class="dealer-name">Godown Sale</td><td>${DATA.grandTotals.godownPPCY}</td><td>${DATA.grandTotals.godownKaw}</td><td>${DATA.grandTotals.godownPlus}</td><td style="font-weight:700;color:var(--accent-blue)">${DATA.grandTotals.godownTotal}</td></tr>
    <tr><td class="dealer-name">SAP Sale</td><td>${DATA.grandTotals.sapPPCY}</td><td>${DATA.grandTotals.sapKaw}</td><td>${DATA.grandTotals.sapPlus}</td><td style="font-weight:700;color:var(--accent-purple)">${DATA.grandTotals.sapTotal}</td></tr>
    <tr class="total-row"><td class="dealer-name">Closing Stock</td><td>${DATA.grandTotals.closingPPCY}</td><td>${DATA.grandTotals.closingKaw}</td><td>${DATA.grandTotals.closingPlus}</td><td>${DATA.grandTotals.closingTotal}</td></tr>
  </tbody>`;
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  initKPIs();
  initOverviewCharts();
  initDealerTables();
});
