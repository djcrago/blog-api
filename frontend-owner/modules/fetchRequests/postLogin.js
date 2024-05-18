export default async function postLogin(fieldValues) {
  const rawResponse = await fetch(
    'https://my-blog-api-cool-tree-347.fly.dev/users/login',
    {
      method: 'POST',
      body: JSON.stringify({
        username: fieldValues.username,
        password: fieldValues.password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );

  const jsonResponse = await rawResponse.json();

  return jsonResponse;
}
