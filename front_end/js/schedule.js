document.getElementById('scheduleForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const route = document.getElementById('route').value;
  const time = document.getElementById('time').value;
  fetch('/api/schedules/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ route, time })
  })
  .then(res => res.json())
  .then(() => location.reload());
});

fetch('/api/schedules/')
  .then(res => res.json())
  .then(data => {
    const table = document.querySelector('#scheduleTable tbody');
    data.forEach(schedule => {
      table.innerHTML += `<tr><td>${schedule.route}</td><td>${schedule.time}</td><td><button onclick="deleteSchedule(${schedule.id})">Delete</button></td></tr>`;
    });
  });

function deleteSchedule(id) {
  fetch(`/api/schedules/${id}/`, { method: 'DELETE' })
    .then(() => location.reload());
}
