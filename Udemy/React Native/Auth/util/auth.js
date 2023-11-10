const URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
const API_KEY = '?key=AIzaSyAgHGKTsGkUUMwjDRokvrYbEqqVSyb4GBw';

async function authenticate(mode, email, password) {
  const path = `${URL}${mode}${API_KEY}`;
  const response = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });

  const data = await response.json();
  return data.idToken;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}
export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}
