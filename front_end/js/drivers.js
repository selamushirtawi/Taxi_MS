document.getElementById('driverForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const license = document.getElementById('license').value;
  fetch('/api/drivers/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, license })
  })
  .then(res => res.json())
  .then(() => location.reload());
});

fetch('/api/drivers/')
  .then(res => res.json())
  .then(data => {
    const table = document.querySelector('#driverTable tbody');
    data.forEach(driver => {
      table.innerHTML += `<tr><td>${driver.name}</td><td>${driver.license}</td><td><button onclick="deleteDriver(${driver.id})">Delete</button></td></tr>`;
    });
  });

function deleteDriver(id) {
  fetch(`/api/drivers/${id}/`, { method: 'DELETE' })
    .then(() => location.reload());
}