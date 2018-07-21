import { BASE_DIR } from '../constants.yml'
import Sample from '@/lib/Sample';
import { uport } from '@/connectors';

const sample = new Sample({
    name: 'world'
});

document.querySelector('.wrapper').addEventListener('click', () => {
    console.log(`hello, ${sample.name}. Base directory is ${BASE_DIR}.`);
});

document.querySelector('.login-handler').addEventListener('click', () => {
    uport.requestCredentials().then((credentials) => {
      console.log(credentials);
    });
});
