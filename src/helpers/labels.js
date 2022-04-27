const labels = {
  LOGIN_USERNAME_PLACEHOLDER: 'Username',
  LOGIN_PASSWORD_PLACEHOLDER: 'Password',
  LOGIN_SUBMIT_BUTTON: 'Login',
  HOME_PAGE_LOGOUT: 'Log out',
  HOME_SCREEN_GAMES_LIST_HEADER: 'Games',
  HOME_SCREEN_GAMES_PLAY: 'Play',
  HOME_SEARCH_PLACEHOLDER: 'Search Game',
  HOME_CATEGORIES: 'Categories'
};

const getLabel = (key) => labels[key];

export default getLabel;
