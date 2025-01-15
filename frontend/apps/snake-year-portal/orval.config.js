module.exports = {
  'snake-year-portal-api': {
    input: 'https://petstore.swagger.io/v2/swagger.json',
    output: {
      target: './src/api/generated.ts',
      client: 'react-query',
      override: {
        mutator: {
          path: './src/api/axiosInstance.ts',
          name: 'customInstance',
        },
      },
    },
  },
};
