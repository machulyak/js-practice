const accountController = require('./Controllers/AccountController');
const { userName, password } = require('./userData');

let userID;
let token;

test('Create new user', async () => {
  const response = await accountController.createUser(userName, password);

  userID = response.data.userID;
  expect(response.status).toBe(201);
  expect(userID).toBeDefined();
  expect(response.data.username).toBe(userName);
  expect(response.data.books).toEqual([]);
});

test('Generate token', async () => {
  const response = await accountController.generateToken(userName, password);

  token = response.data.token;
  expect(response.status).toBe(200);
  expect(response.data.status).toBe('Success');
  expect(response.data.token).toBeTruthy();
});

test('Check Authorized', async () => {
  const response = await accountController.checkAuthorized(userName, password);
  expect(response.status).toBe(200);
  expect(response.data).toBe(true);
});

test('Get User Information', async () => {
  expect(userID).toBeDefined();
  expect(token).toBeTruthy();

  const response = await accountController.getUserInformation(userID, token);
  expect(response.data.username).toBe(userName);
  expect(response.data.books).toEqual([]);
  expect(response.status).toBe(200);
});

test('DELETE User', async () => {
  expect(userID).toBeDefined();
  expect(token).toBeTruthy();

  const response = await accountController.deleteUser(userID, token);
  expect(response.status).toBe(204);
});

test('Get User after deleteUser', async () => {
  expect(userID).toBeDefined();
  expect(token).toBeTruthy();

  await expect(
    accountController.getUserInformation(userID, token),
  ).rejects.toHaveProperty('response.status', 401);
});
