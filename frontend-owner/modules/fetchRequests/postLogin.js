export default async function postLogin(fieldValues) {
  const rawResponse = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    body: JSON.stringify({
      username: fieldValues.username,
      password: fieldValues.password,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const jsonResponse = await rawResponse.json();

  return jsonResponse;
}
