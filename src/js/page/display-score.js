import ns from '@/module/ns';

export default () => {
  console.log('display score page');

  ns.score = Math.floor(1000 * ns.likePoint / (1 + ns.likePoint));

  document.querySelector('.text-score').innerText = ns.score;
}
