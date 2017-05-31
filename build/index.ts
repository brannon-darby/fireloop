import build from './builder';
import { packages } from './config';


build({
  scope: '@fireloop',
  packages
}).catch(err => {
  console.error(err);
  process.exit(1);
});
