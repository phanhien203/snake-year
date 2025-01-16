module.exports = {
  'snake-year-portal-api': {
    input: 'https://petstore.swagger.io/v2/swagger.json',
    output: {
      target: './src/queries/petstore.ts',
      client: 'react-query',
      override: {
        mutator: {
          path: '../../libs/snake-shared/src/axios/axiosInstance.ts',
          name: 'customInstance',
        },
      },
    },
  },
};
