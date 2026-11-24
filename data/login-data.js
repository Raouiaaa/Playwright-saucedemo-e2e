export const loginCases = [
  {
    description: 'invalid username',
    username: 'wrong_user',
    password: 'secret_sauce',
    expectedError: 'Username and password do not match'
  },
  {
    description: 'empty username',
    username: '',
    password: 'secret_sauce',
    expectedError: 'Username is required'
  },
  {
    description: 'empty password',
    username: 'standard_user',
    password: '',
    expectedError: 'Password is required'
  }
];