import ns from '@/module/ns';
import pageTest from '@/page/test';
import pageConnect from '@/page/connect';
import { uport, web3 } from '@/module/connectors';
import Koppy from '@/module/Koppy';
import { registerUser, getUsers } from '@/module/koppyDb';

export default () => {
  console.log('index page');
  const elm = document.querySelector('.login-handler');
  if (elm === null) {
    return;
  }
  elm.addEventListener('click', async () => {
    const credentials = await uport.requestCredentials({ 
      requested: ['name', 'avatar', 'phone', 'country']
    })
    console.log(credentials);
    // モバイルだとうまくうごかないためデモ用に外す
    // web3.eth.getCoinbase(async (error, address) => {
    //   if (error) { throw error }
    //   // dynamoにとりあえず保存
    //   registerUser(address, credentials)
    //   ns.paging.redirect('connect', pageConnect);
    // });
    ns.paging.redirect('connect', pageConnect);
    //// コントラクト上にもユーザー登録する
    //Koppy.registerUser(credentials.address, (error, txHash) => {
    //  if (error) { throw error }
    //});
  });
}
