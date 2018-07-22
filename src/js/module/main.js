import Router from '@/module/router';

export default class Main {
  constructor(opts = {}) {
    console.log('Hello, world!');

    this.initialize();

    console.log('Thanks, world!');
  }

  initialize() {
    this.router = new Router();
  }
}
