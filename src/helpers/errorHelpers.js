const errorMessages = {
  LOGIN_EMPTY_INPUT: 'Please fill in username and passeord',
  LOGIN_INVALID_FORMAT: 'Please fill in correct format username and password',
  LOGIN_INVALID_CREDENTIALS: 'Please enter valid credentials'
};

const getErrorMessages = (key) => errorMessages[key];

export default getErrorMessages;
