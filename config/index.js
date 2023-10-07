import prodConfig from './prod.js';
import devConfig from './dev.js';

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
