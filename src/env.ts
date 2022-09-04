import config from './config';

const env = process.env.NODE_ENV || "development";
const ENV = config[env];    

export default ENV;
