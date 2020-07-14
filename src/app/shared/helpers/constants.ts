export const headersParams = {
  repositories: {
    cols: [['full_name', 'Name'], ['description', 'Description'], ['stargazers_count', 'Stars'],
      ['language', 'Language'], ['updated_at', 'Last Update']],
    keys: ['full_name', 'description', 'stargazers_count', 'language', 'updated_at']
  },
  users: {
    cols: [['login', 'Login']],
    keys: ['login']
  }
};
