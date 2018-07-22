import ns from '@/module/ns';
import pageDisplayScore from '@/page/display-score';

export default () => {
  console.log('connect page');

  function getScore() {
    let postCnt = 0;
    let isFetch = false;
    ns.likePoint = 0;

    const callback = (isLoggedIn) => {
      if (isLoggedIn) {
        isFetch = true;
        fetchPosts(posts => {
          posts.forEach(post => {
            fetchDateAndLikeCount(post, (date, likeCount) => {
              const d = (Date.now() - (new Date(date)).valueOf()) / 1000 / 60 / 60 / 24;

              ns.likePoint += Number(likeCount) * Math.pow(2, - d) / 2;

              postCnt++;

              if (postCnt >= posts.length) {
                ns.paging.redirect('display-score', pageDisplayScore);
              }
            });
          });
        });
      } else {
        console.log('not login.');
      }

      setTimeout(() => {
        if (!isFetch) {
          fetchIsFacebookLoggedIn(callback);
        }
      }, 1000);
    };

    fetchIsFacebookLoggedIn(callback);
  }

  // ログイン済みかどうかを取得する
  function fetchIsFacebookLoggedIn(callback) {
    window.FB.getLoginStatus(response => {
      callback(response.status === 'connected');
    });
  }

  // ログインユーザーの投稿を取得する
  function fetchPosts(callback) {
    window.FB.api(
      '/me/feed',
      'GET',
      {},
      response => {
        callback(response.data);
      }
    );
  }

  // 投稿日時といいねを取得する
  function fetchDateAndLikeCount(post, callback) {
    var date = post.created_time;
    window.FB.api(
      '/' + post.id + '?fields=reactions.type(LIKE).summary(total_count)',
      'GET',
      {},
      response => {
        callback(date, response.reactions.summary.total_count);
      }
    );
  }

  document.querySelector('.btn-get-like').addEventListener('click', () => {
    getScore();
  });
}
