module.exports = {
  Query: {
    launches: (_, __, { dataSources }) => dataSources.launchAPI.getAllLaunches(),
  },
};
