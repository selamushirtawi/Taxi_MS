document.getElementById('terminalForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const location = document.getElementById('location').value;
  // Example POST request
  fetch('/api/terminals/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, location })
  })
  .then(res => res.json())
  .then(data => {
    alert('Terminal added!');
    location.reload();
  });
});

fetch('/api/terminals/')
  .then(res => res.json())
  .then(data => {
    const table = document.querySelector('#terminalTable tbody');
    data.forEach(terminal => {
      table.innerHTML += `<tr><td>${terminal.name}</td><td>${terminal.location}</td><td><button onclick="deleteTerminal(${terminal.id})">Delete</button></td></tr>`;
    });
  });

function deleteTerminal(id) {
  fetch(`/api/terminals/${id}/`, { method: 'DELETE' })
    .then(() => location.reload());
}
