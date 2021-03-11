export default ({ $config: { apolloKey } }) => {
  return {
    httpEndpoint: process.env.APOLLO_PATH,
    httpLinkOptions: {
      headers: {
        'x-api_key': apolloKey,
      },
    },
    inMemoryCacheOptions: {
      addTypename: false,
    },
  }
}
