const axios = require('axios');
const { userName, password } = require('./userData');

let userID;
let token;

test('Create new user', async () => {
  const response = await axios.post('https://demoqa.com/Account/v1/User', {
    userName,
    password,
  });

  expect(response.status).toBe(201);
  expect(response.data.userID).toBeDefined();
  expect(response.data.username).toBe(userName);
  expect(response.data.books).toEqual([]);
  userID = response.data.userID;
});

test('Generate token', async () => {
  const response = await axios.post(
    'https://demoqa.com/Account/v1/GenerateToken',
    {
      userName,
      password,
    },
  );

  expect(response.status).toBe(200);
  expect(response.data.status).toBe('Success');
  expect(response.data.token).toBeTruthy();
  token = response.data.token;
});

test('Check Authorized', async () => {
  const response = await axios.post(
    'https://demoqa.com/Account/v1/Authorized',
    {
      userName,
      password,
    },
  );

  expect(response.status).toBe(200);
  expect(response.data).toBe(true);
});

test('Get User Information', async () => {
  expect(userID).toBeDefined();
  expect(token).toBeTruthy();

  const response = await axios.get(
    `https://demoqa.com/Account/v1/User/${userID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  expect(response.data.username).toBe(userName);
  expect(response.data.books).toEqual([]);
  expect(response.status).toBe(200);
});

test('DELETE User', async () => {
  expect(userID).toBeDefined();
  expect(token).toBeTruthy();

  const response = await axios.delete(
    `https://demoqa.com/Account/v1/User/${userID}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  expect(response.status).toBe(204);
});
