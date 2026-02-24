// Make chart text white for dark theme
Chart.defaults.color = "#ffffff";
Chart.defaults.borderColor = "#334155";

// Line Chart
const lineCtx = document.getElementById('lineChart');

new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue',
      data: [20000, 35000, 30000, 50000, 45000, 60000],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59,130,246,0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});

// Bar Chart
const barCtx = document.getElementById('barChart');

new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Instagram', 'Google', 'Facebook'],
    datasets: [{
      label: 'Leads',
      data: [120, 90, 70],
      backgroundColor: '#22c55e'
    }]
  },
  options: {
    responsive: true
  }
});