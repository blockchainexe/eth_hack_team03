import ns from './ns';
import Paging from '@/module/paging';
import pageCommon from '@/page/common';
import pageIndex from '@/page/index';

// const page = (pageId, callback) => {
//   if(document.querySelector(`body[data-page-id="${pageId}"]`)) {
//     callback();
//   }
// };

export default class Router {
  constructor() {
    this.initialize();
  }

  initialize() {
    ns.page = ns.page || {};

    const paging = ns.paging = new Paging();

    pageCommon();

    paging.redirect('index', pageIndex);
  }
}
