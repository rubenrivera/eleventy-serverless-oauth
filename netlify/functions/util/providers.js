const stackoverflow = {
  clientIdKey: "STACKOVERFLOW_OAUTH_CLIENT_ID",
  clientSecretKey: "STACKOVERFLOW_OAUTH_CLIENT_SECRET",

  /* OAuth API endpoints */
  tokenHost: 'https://stackoverflow.com',
  tokenPath: 'https://stackoverflow.com/oauth/token',
  authorizePath: 'https://stackoverflow.com/authorize',

  /* User API endpoint */
  userApi: "https://stackoverflow.com/2.3/me",
};

module.exports = {
  stackoverflow
};
