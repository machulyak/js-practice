const axios = require('axios');
const api = axios.create({
  baseURL: 'https://demoqa.com/Account/v1/',
});

class AccountController {
  createUser(userName, password) {
    return api.post('User', { userName, password });
  }

  generateToken(userName, password) {
    return api.post('GenerateToken', { userName, password });
  }

  checkAuthorized(userName, password) {
    return api.post('Authorized', { userName, password });
  }

  getUserInformation(userID, token) {
    return api.get(`User/${userID}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  deleteUser(userID, token) {
    return api.delete(`User/${userID}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

module.exports = new AccountController();
