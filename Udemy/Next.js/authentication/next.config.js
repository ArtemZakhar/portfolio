const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
 if (phase === PHASE_DEVELOPMENT_SERVER) {
  return {
   env: {
    mongoDB_username: 'artemzakharchuk',
    mongoDB_password: 'p69RUunZu25tY1It',
    mongoDB_clustername: 'artemzakharchuk',
    mongoDB_database: 'artemzakharchuk',
   },
  };
 }

 return {
  env: {
   mongoDB_username: 'artemzakharchuk',
   mongoDB_password: 'p69RUunZu25tY1It',
   mongoDB_clustername: 'artemzakharchuk',
   mongoDB_database: 'artemzakharchuk',
  },
 };
};
