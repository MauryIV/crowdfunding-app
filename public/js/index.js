const homepage = async () => {
  const response = await fetch('/', {
    method: 'GET',
    headers: { 'Contect-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/')
  } else {
    console.error(response.statusText);
  }
};

const userProjects = async () => {
  const response = await fetch('/api/projects/:user_id', {
    method: 'GET',
    headers: { 'Contect-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/api/projects/:user_id')
  } else {
    console.error(response.statusText);
  }
};

const login = async () => {
  const response = await fetch('/api/users/login', {
    method: 'GET',
    headers: { 'Contect-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/api/users/login')
  } else {
    console.error(response.statusText);
  }
};

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    console.error(response.statusText);
  }
};

document.querySelector('#homepage').addEventListener('click', homepage);
document.querySelector('#userProjects').addEventListener('click', userProjects);
document.querySelector('#login').addEventListener('click', login);
document.querySelector('#logout').addEventListener('click', logout);
