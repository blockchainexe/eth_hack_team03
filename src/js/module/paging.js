export default class Paging {
  constructor(opts = {}) {
    this.initialize(opts);
  }

  initialize(opts = {}) {
    console.log('paging');
  }

  redirect(pageId, callback) {
    const bodyElm = document.querySelector('body');
    bodyElm.setAttribute('data-page-id', pageId);

    if(callback != null) {
      callback();
    }
  }
}
