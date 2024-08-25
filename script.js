document.getElementById('register-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
  
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    const result = await response.json();
    alert(result.message);
  });
  
  document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    const result = await response.json();
    if (result.message === 'Logged in successfully') {
      document.getElementById('logout-button').classList.remove('hidden');
    }
    alert(result.message);
  });
  
  document.getElementById('logout-button').addEventListener('click', async function() {
    const response = await fetch('http://localhost:5000/logout');
    const result = await response.json();
    if (result.message === 'Logged out successfully') {
      document.getElementById('logout-button').classList.add('hidden');
    }
    alert(result.message);
  });
  