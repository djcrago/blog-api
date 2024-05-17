export default async function postSignUp(fieldValues) {
  const rawResponse = await fetch('http://localhost:3000/users/sign-up', {
    method: 'POST',
    body: JSON.stringify({
      first_name: fieldValues.first_name,
      last_name: fieldValues.last_name,
      username: fieldValues.username,
      password: fieldValues.password,
      password_confirm: fieldValues.password_confirm,
      author_passcode: fieldValues.author_passcode,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const jsonResponse = await rawResponse.json();

  return jsonResponse;
}
